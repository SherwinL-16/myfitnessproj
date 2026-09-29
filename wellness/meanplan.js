function showPlan(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.meal-plan-content');

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    contents.forEach((content, i) => {
      content.classList.toggle('active', i === index);
    });
  }