window.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const controls = document.querySelectorAll('.control');

  function setActiveTab(tabId) {
    sections.forEach(function (section) {
      if (section.classList.contains(tabId)) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
        
      }
    });

    controls.forEach(function (control) {
      if (control.dataset.id === tabId) {
        control.classList.add('active-btn');
      } else {
        control.classList.remove('active-btn');
      }
    });
    console.log('Finished setting active tab:', tabId);

  }

  function showDefaultTab() {
    const defaultTabId = 'home'; // Set the ID of the default tab here
    setActiveTab(defaultTabId);
  }

  showDefaultTab(); // Show the default tab on page load

  controls.forEach(function (control) {
    control.addEventListener('click', function () {
      const tabId = control.dataset.id;
      setActiveTab(tabId);
    });
  });
});
