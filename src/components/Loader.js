import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const Loader = (props) => {
  const [node] = useState(document.createElement('div'));
  const loader = document.QuerySelector('#loader');

  useEffect(() => {
    loader.appendChild(node).classList.add('message');
  }, [loader, nodel]);

  useEffect(() => {
    if (props.show) {
      loader.classList.remove('hide');
      document.body.classList.add('loader-open');
    } else {
      loader.classList.add('hide');
      document.body.classList.remove('loader-open');
    }
  }, [loader, props.show]);

  return ReactDOM.createPortal(props.children, node);
};

export default Loader;
