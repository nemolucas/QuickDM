var accordionBtn = document.querySelectorAll('.accordion-button');
            accordionBtn.forEach(function(btn) {
              btn.addEventListener('click', function() {
                this.classList.toggle('active');
                var accordionCollapse = this.nextElementSibling;
                if (accordionCollapse.style.maxHeight) {
                  accordionCollapse.style.maxHeight = null;
                } else {
                  accordionCollapse.style.maxHeight = accordionCollapse.scrollHeight + 'px';
                }
              });
            });