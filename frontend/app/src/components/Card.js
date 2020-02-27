import PropTypes from 'prop-types'

import sass from '~/sass/components/Card.scss'

const Card = ({ title, text }) => (
  <div className={sass.card}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}

Card.defaultProps = {
  text: null,
}

export default Card
