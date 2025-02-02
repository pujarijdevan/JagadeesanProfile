const fetchGitHubProfile = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
    }
};

const updateProfile = async () => {
    // Using your actual GitHub username
    const githubData = await fetchGitHubProfile('pujarijdevan');
    
    if (githubData) {
        document.getElementById('github-bio').textContent = 'QA Leadership Engineer with 14+ Years Experience';
        document.getElementById('github-repos').textContent = `Public Repositories: ${githubData.public_repos}`;
    }
};

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateProfile);