document.addEventListener('DOMContentLoaded', () => {
    const blogCategories = document.getElementById('blog-categories');
    const blogContent = document.getElementById('blog-content');

    blogCategories.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            loadBlogContent(e.target.textContent);
        }
    });

    function loadBlogContent(blogTitle) {
        // Placeholder function for dynamic blog loading
        blogContent.innerHTML = `
            <article>
                <h2>${blogTitle}</h2>
                <p>This is the content for ${blogTitle}. Detailed and advanced discussion goes here.</p>
            </article>
        `;
    }
});
