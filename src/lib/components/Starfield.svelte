<script>
	import { onMount, onDestroy } from 'svelte';
	import { isIdle } from '$lib/stores/idle.js';
	import { browser } from '$app/environment';

	let canvas;
	let ctx;
	let animationFrameId;
	let width, height;
	let active = false;

	// --- KONFIGURASI BARU (LEBIH HALUS) ---
	const STAR_COUNT = 150; // Jumlah bintang pas (tidak terlalu ramai)
	const SHOOTING_STAR_FREQUENCY = 0.005; // Sangat jarang (0.5% chance per frame)
	
	let stars = [];
	let shootingStars = [];

	const unsubscribeIdle = isIdle.subscribe((value) => {
		if (!browser) return;
		active = value;
		if (active) {
			if (!animationFrameId) {
				initCanvasSize();
				initStars();
				animate();
			}
		} else {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
				animationFrameId = null;
				if (ctx && width && height) ctx.clearRect(0, 0, width, height);
			}
		}
	});

	// === CLASS BINTANG (UPDATED) ===
	class Star {
		constructor() {
			this.reset(true); // true = inisialisasi awal (sebar acak di layar)
		}

		reset(initial = false) {
			// Posisi: Jika awal, sebar acak. Jika reset, mulai dari Kiri atau Bawah.
			if (initial) {
				this.x = Math.random() * width;
				this.y = Math.random() * height;
			} else {
				// Spawn di pinggir Kiri atau Bawah agar terlihat masuk layar
				if (Math.random() < 0.5) {
					this.x = -10; // Mulai dari kiri luar layar
					this.y = Math.random() * height;
				} else {
					this.x = Math.random() * width;
					this.y = height + 10; // Mulai dari bawah luar layar
				}
			}

			// Subtlety: Ukuran sangat kecil (0.5px - 1.5px)
			this.size = Math.random() * 1 + 0.5; 
			
			// Movement: Gerak pelan ke Kanan (speedX) dan Sedikit ke Atas (speedY)
			this.speedX = Math.random() * 0.3 + 0.1; // Lambat ke kanan
			this.speedY = Math.random() * 0.2 + 0.05; // Sangat lambat ke atas

			// Twinkle: Base opacity rendah (0.1 - 0.4) agar tidak mencolok
			this.baseOpacity = Math.random() * 0.3 + 0.1; 
			
			// Kecepatan kedip & fase waktu acak
			this.twinkleSpeed = Math.random() * 0.05 + 0.02; 
			this.twinklePhase = Math.random() * Math.PI * 2;
		}

		update() {
			// Gerak: X bertambah (kanan), Y berkurang (atas)
			this.x += this.speedX;
			this.y -= this.speedY;

			// Logic Kedip (Sinewave)
			// Hasilnya akan naik turun secara halus di sekitar baseOpacity
			this.currentOpacity = this.baseOpacity + Math.sin(Date.now() * 0.002 + this.twinklePhase) * 0.1;
			
			// Pastikan opacity tidak minus
			if (this.currentOpacity < 0) this.currentOpacity = 0;

			// Reset jika keluar dari layar (Kanan atau Atas)
			if (this.x > width || this.y < 0) {
				this.reset();
			}
		}

		draw() {
			ctx.fillStyle = `rgba(255, 255, 255, ${this.currentOpacity})`;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	// === CLASS BINTANG JATUH (UPDATED) ===
	class ShootingStar {
		constructor() {
			this.reset();
		}

		reset() {
			// Mulai dari Kiri Bawah atau Tengah Bawah
			this.x = Math.random() * (width * 0.5); 
			this.y = Math.random() * (height / 2) + (height / 2); // Area bawah
			
			this.length = Math.random() * 50 + 10; // Ekor lebih pendek biar halus
			this.speed = Math.random() * 5 + 3; // Tidak terlalu ngebut
			this.size = Math.random() * 1 + 0.1;
			
			// Arah: Diagonal ke Kanan Atas (-45 derajat)
			// Cos(negative) = positive X, Sin(negative) = negative Y
			const angle = -Math.PI / 4; 
			this.dx = this.speed * Math.cos(angle);
			this.dy = this.speed * Math.sin(angle);
			
			this.active = true;
		}

		update() {
			this.x += this.dx;
			this.y += this.dy;

			// Mati jika keluar Kanan atau Atas
			if (this.x > width + this.length || this.y < -this.length) {
				this.active = false;
			}
		}

		draw() {
			if (!this.active) return;
			// Hitung ekor (di belakang arah gerak)
			const tailX = this.x - this.length * this.dx / this.speed;
			const tailY = this.y - this.length * this.dy / this.speed;

			const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
			gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)'); // Kepala
			gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   // Ekor transparan

			ctx.beginPath();
			ctx.strokeStyle = gradient;
			ctx.lineWidth = this.size;
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(tailX, tailY);
			ctx.stroke();
		}
	}

	function initStars() {
		stars = [];
		for (let i = 0; i < STAR_COUNT; i++) {
			stars.push(new Star());
		}
		shootingStars = [];
	}

	function initCanvasSize() {
		if (!browser) return;
		if (canvas) {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
		}
	}

	function animate() {
		if (!active || !browser) return;

		// Clear canvas
		ctx.clearRect(0, 0, width, height);

		// Gambar Bintang Biasa
		stars.forEach((star) => {
			star.update();
			star.draw();
		});

		// Logic Bintang Jatuh
		if (Math.random() < SHOOTING_STAR_FREQUENCY) {
			shootingStars.push(new ShootingStar());
		}

		shootingStars = shootingStars.filter((star) => star.active);
		shootingStars.forEach((star) => {
			star.update();
			star.draw();
		});

		animationFrameId = requestAnimationFrame(animate);
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		initCanvasSize();
		window.addEventListener('resize', initCanvasSize);
	});

	onDestroy(() => {
		if (!browser) return;
		if (animationFrameId) cancelAnimationFrame(animationFrameId);
		window.removeEventListener('resize', initCanvasSize);
		unsubscribeIdle();
	});
</script>

<canvas
	bind:this={canvas}
	class="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 {active ? 'opacity-100' : 'opacity-0'}"
></canvas>