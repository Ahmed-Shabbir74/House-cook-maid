tailwind.config = {
    theme: {
      extend: {
        keyframes: {
            slideUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
          },
          animation: {
            'slide-up': 'slideUp 0.5s ease-out forwards',
          },
        // Custom utility classes
        colors: {
            'brown': '#301820',
            'green2':'#AEFFC9'
          },
          screens: {
            'ccsm':'393px',
            'csm':'460px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            'cmd':'805px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.no-scrollbar': {
            '-ms-overflow-style': 'none', /* IE and Edge */
            'scrollbar-width': 'none',
          
          },
          '.no-scrollbar::-webkit-scrollbar': {
            display: 'none',
          },
        });
      },
    ],
  };


  function handlesidebar(){
    const x=document.querySelector('.sidebar');
    x.classList.toggle('hidden');
    x.classList.toggle('absolute');
    x.classList.toggle('w-[25%]')
    x.classList.toggle('z-20');



  }
  function handlebox(){

    const x=document.querySelector('.dialog');
    x.showModal();
    x.classList.remove('scale-0', 'opacity-0');
    x.classList.add('scale-100', 'opacity-100');
  }
  function handlesignout(){

    const x=document.querySelector('.logout');
    x.showModal();
    x.classList.remove('scale-0', 'opacity-0');
    x.classList.add('scale-100', 'opacity-100');
  }
  function handlebox2(){

    const x=document.querySelector('.dialogunblock');
    x.showModal();
    x.classList.remove('scale-0', 'opacity-0');
    x.classList.add('scale-100', 'opacity-100');
  }
  
  function closemodal(){
    const x=document.querySelector('.dialog');
    x.classList.remove('scale-100', 'opacity-100'); 
    x.classList.add('scale-0', 'opacity-0'); 
    x.close();
  }
  function closemodal2(){
    const x=document.querySelector('.dialogunblock');
    x.classList.remove('scale-100', 'opacity-100'); 
    x.classList.add('scale-0', 'opacity-0');
    x.close();
  }
  function closemodal3(){
    const x=document.querySelector('.logout');
    x.classList.remove('scale-100', 'opacity-100'); 
    x.classList.add('scale-0', 'opacity-0');
    x.close();
  }

  window.addEventListener('load', () => {
    document.querySelector('.animate-slide-up').classList.add('animate-slide-up');
  });