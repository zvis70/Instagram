
import * as React from 'react'
import { Box, styled, List, ListItem } from '@mui/material'
import { MENU_ITEMS_LIST } from '../config/menu.itemslist';
import { svgService } from '../config/svg.service';
// import { Instagram } from '@mui/icons-material';
import { SvgComponent } from './SvgComponent';

const Container = styled(Box)({
  padding: 8,
  '& > ul': {
    padding: '10px 0 0 5px',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer'
  },
  '& > ul > li > svg': {

    marginRight: 20
  }

})

export function MenuBarPreview() {

  return (
    <Container>
      
      <SvgComponent svgName={'instagram_logo'} />
      <SvgComponent svgName={'instagram'} />
      {/* <div className='svg-icon-div-position'> <SvgComponent svgName={'home'} className='svg-icon-position'/> Home </div> */}
      <List >
        {
          MENU_ITEMS_LIST.map(icons => (
            <ListItem key={icons.name} >
              <icons.icon fontSize='small' />
              {icons.title}

            </ListItem>
          ))

        }
      </List>

    </Container>
  )
}
