document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        {
            title: "Sample Video 1",
            thumbnail: "https://via.placeholder.com/300x200",
            url: "https://www.youtube.com/embed/VIDEO_ID_1"
        },
        {
            title: "Sample Video 2",
            thumbnail: "https://via.placeholder.com/300x200",
            url: "https://www.youtube.com/embed/VIDEO_ID_2"
        },
        // Add more video objects here
    ];

    const videoList = document.querySelector('.video-list');

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="video-title">${video.title}</div>
        `;

        videoItem.addEventListener('click', () => {
            const videoModal = document.createElement('div');
            videoModal.classList.add('video-modal');

            videoModal.innerHTML = `
                <div class="video-modal-content">
                    <span class="close-button">&times;</span>
                    <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;

            document.body.appendChild(videoModal);

            const closeButton = videoModal.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                document.body.removeChild(videoModal);
            });
        });

        videoList.appendChild(videoItem);
    });
});
