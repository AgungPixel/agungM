// src/lib/stores/idle.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const IDLE_TIMEOUT = 3000; // 3 Detik

function createIdleStore() {
	const { subscribe, set } = writable(false);
	let timer;

	function resetTimer() {
		if (!browser) return;
		set(false);
		clearTimeout(timer);
		timer = setTimeout(() => {
			set(true);
		}, IDLE_TIMEOUT);
	}

	function init() {
		// 1. Jika di Server (bukan browser), kembalikan fungsi kosong agar tidak error
		if (!browser) return () => {};

		const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];

		// 2. Pasang event listener
		events.forEach((event) => {
			window.addEventListener(event, resetTimer, { passive: true });
		});

		// 3. Jalankan timer pertama kali
		resetTimer();

		// 4. WAJIB RETURN FUNGSI CLEANUP
		return () => {
			clearTimeout(timer);
			if (browser) {
				events.forEach((event) => {
					window.removeEventListener(event, resetTimer);
				});
			}
		};
	}

	// 5. Pastikan mengembalikan object { subscribe, init }
	return {
		subscribe,
		init
	};
}

// 6. Export sebagai Named Export
export const isIdle = createIdleStore();