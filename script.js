// API Documentation Generator Logic
document.getElementById('generateBtn').addEventListener('click', () => {
    const apiInput = document.getElementById('apiInput').value;
    const output = document.getElementById('output');

    try {
        const apiData = JSON.parse(apiInput);
        const documentation = generateDocumentation(apiData);
        output.innerHTML = `<pre><code class="language-json">${documentation}</code></pre>`;
        output.style.display = 'block';
        Prism.highlightAll(); // Highlight code with Prism.js
    } catch (error) {
        output.innerHTML = `<p style="color: #ff6b6b;">Error: Invalid JSON input. Please check your syntax.</p>`;
        output.style.display = 'block';
    }
});

// Function to generate documentation
function generateDocumentation(apiData) {
    let doc = `# ${apiData.name} Documentation\n\n`;
    doc += `**Version**: ${apiData.version}\n\n`;
    doc += `## Endpoints\n\n`;

    apiData.endpoints.forEach(endpoint => {
        doc += `### ${endpoint.method} ${endpoint.path}\n`;
        doc += `${endpoint.description}\n\n`;
        doc += ```json
{
    "method": "${endpoint.method}",
    "path": "${endpoint.path}",
    "description": "${endpoint.description}"
}
\`\`\`\n\n`;
    });

    return doc;
}

// Scroll-based Ad Triggering
window.addEventListener('scroll', () => {
    const toolSection = document.getElementById('tool-section');
    const scrollPosition = window.scrollY + window.innerHeight;
    const toolPosition = toolSection.offsetTop;

    // Trigger ads when user scrolls 70% of the page
    if (scrollPosition >= document.body.scrollHeight * 0.7) {
        // Simulate ad trigger (replace with actual ad network code later)
        console.log('Ad Trigger: Scrolled 70% - Load interstitial or banner ads');
    }

    // Show tool section only after scrolling to it
    if (scrollPosition >= toolPosition) {
        toolSection.classList.add('visible');
    }
});

// Simulate Pop-up/Pop-under Ads on Page Load
window.addEventListener('load', () => {
    // Simulate pop-up ad (replace with actual ad network code later)
    console.log('Ad Trigger: Pop-up/Pop-under on page load');
});
