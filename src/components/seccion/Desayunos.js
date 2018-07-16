import React from 'react';
import {Button,DialogTitle,DialogContent,Dialog,GridListTile,GridList,GridListTileBar,IconButton,} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export default class Desayunos extends React.Component {
    state = {
        open: false,

        Data:[
            {cols: 2,title:'Fruta',desc:'Preparada con yogurt y granola',img:'https://images.pexels.com/photos/1210534/pexels-photo-1210534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {featured: false,title:'Fruta',desc:'Preparada con yogurt y granola',img:'https://images.pexels.com/photos/1210534/pexels-photo-1210534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {featured: false,title:'Fruta',desc:'Preparada con yogurt y granola',img:'https://images.pexels.com/photos/1210534/pexels-photo-1210534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {featured: false,title:'Fruta',desc:'Preparada con yogurt y granola',img:'https://images.pexels.com/photos/1210534/pexels-photo-1210534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {featured: false,title:'Fruta',desc:'Preparada con yogurt y granola',img:'https://images.pexels.com/photos/1210534/pexels-photo-1210534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            {cols: 3,title:'Fruta',desc:'Preparada con yogurt y granola',img:'https://images.pexels.com/photos/1210534/pexels-photo-1210534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},

        ]
    };

    render() {
        let {Data} = this.state
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.close}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">Desayunos</DialogTitle>
                    <DialogContent>
                        <GridList cellHeight={160} spacing={1} style={styles.gridList} cols={3}>
                            {Data.map(tile => (
                                <GridListTile  key={tile.img} cols={tile.cols || 1}>
                                    <img src={tile.img} alt={tile.title} />
                                    <GridListTileBar
                                        title={tile.title}
                                        subtitle={<span>{tile.desc}</span>}
                                        titlePosition="top"
                                        actionIcon={
                                            <IconButton style={styles.icon}>
                                                <StarBorderIcon />
                                            </IconButton>
                                        }
                                        actionPosition="left"
                                        style={styles.titleBar}
                                    />
                                </GridListTile>
                            ))}

                        </GridList>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

const styles = {
    gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
};