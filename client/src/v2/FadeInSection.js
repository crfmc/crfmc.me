import React from 'react';

import './styles_v2/fadeinsection.css'

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setVisible(false);
        }
        else {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, {
    threshold: 0.25
  });
    
    observer.observe(domRef.current); // Observe the node
  }, []);

  return (
    <div
      className={`${props.from_left ? 'from_left' : 'fade-in-section'} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}