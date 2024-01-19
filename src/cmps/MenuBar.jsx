import React from 'react'
import { Drawer, styled } from '@mui/material'
import { MenuBarPreview } from './MenueBarPreview'


export function MenuBar() {
    return (
        // <div>

        <Drawer anchor='left'
            open={true}
            hideBackdrop={true}
            ModalProps={{
                keepMount: true
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    //marginTop: '64px',
                   // width: '200px',
                    background: '#f5f5f5',
                    // borderRight: 'none',
                    //height: 'calc(100vh - 64px)'
                }
            }}
            >
                
            {/* <div className='folder-list-temp-title'> Hello From EmailFolderList </div> */}

            <MenuBarPreview />

        </Drawer>
        // </div>

    )
}
