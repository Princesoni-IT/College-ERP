// Toggle sidebar and save state
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    // Mobile behaviour
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("show");
        return;
    }

    // Desktop behaviour
    sidebar.classList.toggle("collapsed");
    
    // Save sidebar state to localStorage
    if (sidebar.classList.contains("collapsed")) {
        localStorage.setItem("sidebarState", "collapsed");
    } else {
        localStorage.setItem("sidebarState", "expanded");
    }
}

// Restore sidebar state on page load
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        const sidebarState = localStorage.getItem("sidebarState");
        
        if (sidebarState === "collapsed") {
            sidebar.classList.add("collapsed");
        }
    }
});
