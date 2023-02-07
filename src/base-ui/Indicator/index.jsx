import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { IndicatorWrapper } from './styled'

const Indicator = memo((props) => {
  const [selectIndex, setSelectIndex] = useState()
  
  return <IndicatorWrapper>Indicator</IndicatorWrapper>;
})

Indicator.propTypes = {}

export default Indicator