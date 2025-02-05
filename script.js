document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah aksi default (perpindahan langsung)
      
      // Smooth scroll ke ID target
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth', // Mengaktifkan smooth scroll
        block: 'start', // Posisi scroll dimulai dari bagian atas
      });
    });
  });

  function scrollToSection(id) {
    // Mencari elemen dengan ID yang dituju dan scroll ke dalamnya dengan halus
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth', // Efek smooth scroll
      block: 'start' // Mengatur scroll dimulai dari atas
    });
  }
