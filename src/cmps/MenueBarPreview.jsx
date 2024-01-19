
import * as React from 'react'
import { Box, styled, List, ListItem } from '@mui/material'


import { MENU_ITEMS_LIST } from '../config/menu.itemslist';


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

      <div> hello From Menu Preview</div>   
     
      <List >
        {
          MENU_ITEMS_LIST.map(data => (
            <ListItem  key = {data.name} >
              <data.icon fontSize='small' />  
              {data.title}

            </ListItem>
          ))

        }
      </List>
      
    </Container>
  )

}
