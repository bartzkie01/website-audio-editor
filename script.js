let wavesurfer;
let isPlaying = false;

function loadAudio() {
    const fileInput = document.getElementById('audioFile');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an audio file.");
        return;
    }

    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'blue',
        progressColor: 'purple',
        cursorWidth: 2, // Increase cursor width for better visibility
        cursorColor: 'red' // Set cursor color
    });

    const fileURL = URL.createObjectURL(file);
    wavesurfer.load(fileURL);

    // Add event listener for audio finished event
    wavesurfer.on('finish', function() {
        document.getElementById('playButton').innerText = 'Play'; // Change button text to 'Play'
        isPlaying = false;
    });
}

function togglePlayPause() {
    if (isPlaying) {
        wavesurfer.pause();
        document.getElementById('playButton').innerText = 'Play';
    } else {
        wavesurfer.play();
        document.getElementById('playButton').innerText = 'Pause';
    }
    isPlaying = !isPlaying;
}

function stopAudio() {
    wavesurfer.stop();
    document.getElementById('playButton').innerText = 'Play'; // Change button text to 'Play'
    isPlaying = false;
}

// Implement other functions (applyFadeIn, applyFadeOut, etc.)
