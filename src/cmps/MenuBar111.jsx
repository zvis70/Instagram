import React from 'react'
import { Drawer, styled } from '@mui/material'
import { MenuBarPreview } from './MenueBarPreview'


export function MenuBar() {
    return (
        <div >
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
                        // color: '#0000000',
                        width: '200px',
                        background: '#f5f5f5',
                        // borderRight: 'none',
                        height: '100vh',
                    }
                }}
            >

                <MenuBarPreview />

            </Drawer>
        </div>

    )
}
