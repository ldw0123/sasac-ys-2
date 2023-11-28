// props.children

import propTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      <div className="Section__section">
        <h3 className="Section__title">{title}</h3>
        <div>{children}</div>
      </div>
    </>
  );
}

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Section;
