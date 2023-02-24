import React from "react";
import Wrapper from "../../../../HOC/Wrapper";
import classes from './ColRow.module.css'
import { Colshow } from "../../../../Containers/Slide/Pics/Pics";

const ColRow = () => {
    return (
        <Wrapper className="container-fluid">
            <section className="container">
                <div className={classes.gridRow}>
                    <div className={classes.gridCol}>
                        <a className={classes.category} style="backgroundImage: {MenCat}">
                            <div className={classes.cat}>
                                <div className={classes.catTitle}>مردانه</div>
                            </div>
                        </a>
                    </div>
                    <div className={classes.gridCol}>
                        <a className={classes.category} style="backgroundImage: {WomenCat}">
                            <div className={classes.cat}>
                                <div className={classes.catTitle}>زنانه</div>
                            </div>
                        </a>
                    </div>
                    <div className={classes.gridCol}>
                        <a className={classes.category} style="backgroundImage: {AccCat}">
                            <div className={classes.cat}>
                                <div className={classes.catTitle}>لوازم جانبی</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default ColRow