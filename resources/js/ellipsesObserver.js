let blogEllipses;
let blogSectionsArray;
let testimonialEllipses;
let testimonialSectionsArray;
let collabSectionsArray;
let collabEllipses;

function updateEllipsesCollab(index, active) {
    if(active) {
        collabEllipses[index].style.backgroundColor = "#2A385C";
    }
    else {
        collabEllipses[index].style.backgroundColor = "#C4C4C4";
    }
}

function handleIntersectCollab(entries, observer) {
    let cutoff = collabSectionsArray.length / 2;
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.9) {
          const index = collabSectionsArray.findIndex(element => element.innerHTML === entry.target.innerHTML);
          if (index >= cutoff) {
            updateEllipsesCollab(1, true);
            updateEllipsesCollab(0, false);
          }
          else {
            updateEllipsesCollab(1, false);
            updateEllipsesCollab(0, true);
          }
      }
    });
}

function updateEllipsesBlog(index, active) {
    if(active) {
        blogEllipses[index].style.backgroundColor = "#2A385C";
    }
    else {
        blogEllipses[index].style.backgroundColor = "#C4C4C4";
    }
}

function handleIntersectBlog(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.9) {
          const index = blogSectionsArray.findIndex(element => element.innerText === entry.target.innerText);
          updateEllipsesBlog(index, true);
      } else {
          const index = blogSectionsArray.findIndex(element => element.innerText === entry.target.innerText);
          updateEllipsesBlog(index, false);
      }
    });
}

function updateEllipsesTestimonial(index, active) {
    if(active) {
        testimonialEllipses[index].style.backgroundColor = "#2A385C";
    }
    else {
        testimonialEllipses[index].style.backgroundColor = "#C4C4C4";
    }
}

function handleIntersectTestimonial(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.9) {
          const index = testimonialSectionsArray.findIndex(element => element.innerText === entry.target.innerText);
          updateEllipsesTestimonial(index, true);
      } else {
          const index = testimonialSectionsArray.findIndex(element => element.innerText === entry.target.innerText);
          updateEllipsesTestimonial(index, false);
      }
    });
}

function createObservers(blogSections, testimonialSections, collabSections) {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9
    };

    let blogObserver = new IntersectionObserver(handleIntersectBlog, options);
    blogSectionsArray = [...blogSections];

    blogSectionsArray.forEach(element => {
        blogObserver.observe(element);
    });

    let testimonialObserver = new IntersectionObserver(handleIntersectTestimonial, options);
    testimonialSectionsArray = [...testimonialSections];

    testimonialSectionsArray.forEach(element => {
        testimonialObserver.observe(element);
    });

    let collabObserver = new IntersectionObserver(handleIntersectCollab, options);
    collabSectionsArray = [...collabSections];

    collabSectionsArray.forEach(element => {
        collabObserver.observe(element);
    });
}

window.addEventListener("load", (event) => {
    let blogSections = document.getElementsByClassName("blog-section");
    blogEllipses = document.getElementsByClassName("blog-ellipsis");

    let testimonialSections = document.getElementsByClassName("testimonials-section");
    testimonialEllipses = document.getElementsByClassName("testimonials-ellipsis");

    let collabSections = document.getElementsByClassName("collaboration-sectionimage");
    collabEllipses = document.getElementsByClassName("collaboration-ellipsis");

    createObservers(blogSections, testimonialSections, collabSections);
}, false);