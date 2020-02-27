import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core'

const Card = ({ title, text }) => (
  <Card>
    <CardContent>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{text}</Typography>
    </CardContent>
  </Card>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}

Card.defaultProps = {
  text: null,
}

export default Card
