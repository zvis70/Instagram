import React from 'react'
import { svgService } from '../config/svg.service';



export  const SvgComponent = ({ svgName }) => {

    const svgContent = svgService.getSvg(svgName)

    return (
        // <div>SvgComponent</div>
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
  )
}
