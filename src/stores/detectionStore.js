import { writable } from 'svelte/store';

// Create a Svelte store for managing detection method state
const detectionStore = writable({
    method: null, // Currently selected detection method
    methods: []  // List of available detection methods
});

// Function to set the detection method
export function setDetectionMethod(method) {
    detectionStore.update(state => ({ ...state, method }));
}

// Function to load available detection methods
export function loadDetectionMethods(methods) {
    detectionStore.update(state => ({ ...state, methods }));
}

// Function to get current state
export function getDetectionStore() {
    return detectionStore;
}

export default detectionStore;