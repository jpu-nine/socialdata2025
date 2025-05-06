document.addEventListener('DOMContentLoaded', function() {
    const tocContainer = document.getElementById('toc-container');
    const postContent = document.querySelector('.post-content');
    const headings = Array.from(postContent.querySelectorAll('h1, h2, h3'));
    const tocList = document.createElement('ul');
    let h1Count = 0;
  
    let topAnchor = document.getElementById('top-of-page');
    if (!topAnchor) {
      topAnchor = document.createElement('div');
      topAnchor.id = 'top-of-page';
      postContent.insertBefore(topAnchor, postContent.firstChild);
    }
  
    headings.forEach(function(heading) {
      if (heading.tagName === 'H1' && h1Count < 2) {
        h1Count++;
        return;
      }
  
      const headingLevel = parseInt(heading.tagName.substring(1));
      let id = heading.getAttribute('id');
      if (!id) {
        id = heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        heading.setAttribute('id', id);
      }
  
      const listItem = document.createElement('li');
      listItem.style.marginLeft = (headingLevel - 1) * 20 + 'px';
      const link = document.createElement('a');
      link.href = '#' + id;
      link.textContent = heading.textContent;
      listItem.appendChild(link);
      tocList.appendChild(listItem);
  
      heading.style.cursor = 'pointer';
      heading.style.transition = 'background-color 0.3s ease-in-out';
      heading.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e0f7fa';
      });
      heading.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
      });
      heading.addEventListener('click', function() {
        window.location.hash = '#top-of-page';
      });
    });
  
    if (tocContainer && tocList.children.length > 0) {
      tocContainer.appendChild(tocList);
    }
  });