document.addEventListener('DOMContentLoaded', function() {
    const postContent = document.querySelector('.post-content');
    const images = postContent.querySelectorAll('img');
    const collapseThreshold = 1000;
    const previewHeight = 500;
  
    images.forEach(img => {
      if (img.naturalHeight > collapseThreshold) {
        const container = document.createElement('div');
        container.classList.add('collapsible-image-container');
  
        const wrapper = document.createElement('div');
        wrapper.classList.add('image-wrapper');
        wrapper.style.overflow = 'hidden';
        wrapper.style.maxHeight = `${previewHeight}px`;
        wrapper.style.transition = 'max-height 0.3s ease-in-out';
        wrapper.style.cursor = 'pointer';
  
        const toggleOverlay = document.createElement('div');
        toggleOverlay.classList.add('image-toggle-overlay');
        toggleOverlay.textContent = 'Show Full Image';
        toggleOverlay.style.position = 'absolute';
        toggleOverlay.style.bottom = '0';
        toggleOverlay.style.left = '0';
        toggleOverlay.style.width = '100%';
        toggleOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        toggleOverlay.style.color = 'white';
        toggleOverlay.style.textAlign = 'center';
        toggleOverlay.style.padding = '0.5em';
        toggleOverlay.style.cursor = 'pointer';
        toggleOverlay.style.zIndex = '1';
  
        toggleOverlay.addEventListener('mouseenter', function() {
          this.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        });
        toggleOverlay.addEventListener('mouseleave', function() {
          this.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        });
  
        // Replace the image with the new structure
        img.parentNode.insertBefore(container, img);
        container.style.position = 'relative';
        container.appendChild(wrapper);
        wrapper.appendChild(img);
        container.appendChild(toggleOverlay);
  
        let isExpanded = false;
        container.addEventListener('click', function() {
          isExpanded = !isExpanded;
          if (isExpanded) {
            wrapper.style.maxHeight = `${img.naturalHeight}px`;
            toggleOverlay.textContent = 'Hide Image';
          } else {
            wrapper.style.maxHeight = `${previewHeight}px`;
            toggleOverlay.textContent = 'Show Full Image';
          }
        });
  
        // Ensure initial height is set after image loads
        img.onload = function() {
          wrapper.style.maxHeight = `${previewHeight}px`;
        };
      }
    });
  
    // Add the CSS rules dynamically
    const style = document.createElement('style');
    style.textContent = `
      .collapsible-image-container { position: relative; margin-bottom: 1em; display: inline-block; width: 100%; }
      .image-wrapper { overflow: hidden; max-height: ${previewHeight}px; transition: max-height 0.3s ease-in-out; cursor: pointer; }
      .image-wrapper img { display: block; width: 100%; height: auto; }
      .image-toggle-overlay { position: absolute; bottom: 0; left: 0; width: 100%; background-color: rgba(0, 0, 0, 0.6); color: white; text-align: center; padding: 0.5em; cursor: pointer; z-index: 1; transition: background-color 0.2s ease-in-out; }
    `;
    document.head.appendChild(style);
  });