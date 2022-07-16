import React from "react";
import { ProgressBar } from "react-bootstrap";
import  './index.css'

export default function Home3(){
    return(
        // {/* Flash Sales first body in this js*/}
        <div>
            <div className="home3">
                <img src={require('./images/Capture.PNG11.PNG')} alt= "" style={{height:30,margin: 8}} />
                <p style={{margin: 10, color: "#fff", fontWeight: 500}}>Flash Sales | Free Delivery</p>
                <p style={{margin: 10,marginLeft: 250, color: "#fff"}} >Time left : <span style={{fontWeight : "bold"}} >00h : 00m : 00s</span> </p>
            </div>
            <div style={{backgroundColor:"#fff", marginLeft:195, width:1211, display:"flex",flexDirection:"row",borderBottomLeftRadius:10,borderBottomRightRadius:10 }} >
                <a href="" className="paragraph">
                    <img style={{backgroundColor:"#fff",width: 170 }} className= "hoto" src={require('./images/wacht.PNG')} alt= "" />
                    <p className="p" >Oraimo Smart Watch 1.69..</p>
                    <h6>₦ 15,900</h6>
                    <h6 className="h6" >₦ 5,000</h6>
                    <p>29 items left</p>
                    <ProgressBar 
                        now={29}
                        variant="warning"
                        style={{height:8,marginLeft:5,borderRadius:15}}
                    />
                </a>
                <a href="" className="paragraph">
                    <img style={{backgroundColor:"#fff",width: 170 }} className= "hoto" src={require('./images/power.PNG')} alt= "" />
                    <p className="p1" >Oraimo Power Bank OPB-..</p>
                    <h6>₦ 8,255</h6>
                    <h6 className="h6" >₦ 5,000</h6>
                    <p>44 items left</p>
                    <ProgressBar 
                        now={44}
                        variant="warning"
                        style={{height:8,marginLeft:5,borderRadius:15}}
                    />
                </a>
                <a href="" className="paragraph">
                    <img style={{backgroundColor:"#fff",width: 170 }} className= "hoto" src={require('./images/blu.PNG')} alt= "" />
                    <p className="p2" >Oraimo Free Pods3 True..</p>
                    <h6>₦ 13,205</h6>
                    <h6 className="h6" >₦ 5,000</h6>
                    <p>93 items left</p>
                    <ProgressBar 
                        now={93}
                        variant="warning"
                        style={{height:8,marginLeft:5,borderRadius:15}}
                    />
                </a>
                <a href="" className="paragraph">
                    <img style={{backgroundColor:"#fff",width: 170 }} className= "hoto" src={require('./images/wacht2.PNG')} alt= "" />
                    <p className="p3" >Oraimo Silver Edition Sm..</p>
                    <h6>₦ 14,155</h6>
                    <h6 className="h6" >₦ 5,000</h6>
                    <p>86 items left</p>
                    <ProgressBar 
                        now={86}
                        variant="warning"
                        style={{height:8,marginLeft:5,borderRadius:15}}
                    />
                </a>
                <a href="" className="paragraph">
                    <img style={{backgroundColor:"#fff",width: 170 }} className= "hoto" src={require('./images/power2.PNG')} alt= "" />
                    <p className="p4" >Oraimo 200000MAH Lon..</p>
                    <h6>₦ 10,800</h6>
                    <h6 className="h6" >₦ 5,000</h6>
                    <p>6 items left</p>
                    <ProgressBar 
                        now={60}
                        variant="warning"
                        style={{height:8,marginLeft:5,borderRadius:15}}
                    />
                </a>
                <a href="" className="paragraph">
                    <img style={{backgroundColor:"#fff",width: 170 }} className= "hoto" src={require('./images/bt.PNG')} alt= "" />
                    <p className="p5" >Oraimo Knight 2 Wireless..</p>
                    <h6>₦ 5,000</h6>
                    <h6 className="h6" >₦ 5,000</h6>
                    <p>10 items left</p>
                    <ProgressBar 
                        now={100}
                        variant="warning"
                        style={{height:8,marginLeft:5,borderRadius:15}}
                    />
                </a>
            </div>
            {/* Don't Miss Out On These!!! second body */}
            <div className="second-div">
                <p className="second" >Don't Miss Out On These!!!</p>
                <div style={{display: "flex",flexDirection:"row",padding:1 }} className="missOut" >
                    <a className="miss" href="" ><img src={require('./images/snip.PNG')} alt= "" className="imagefoot"  /></a>
                    <a className="miss" href="" ><img src={require('./images/snip2.PNG')} alt= "" className="imagefoot" /></a>
                </div>
            </div>
            <div className="second-div1">
                <div style={{display: "flex",flexDirection:"row",padding:1 }} className="missOut" >
                    <a className="miss" href="" ><img src={require('./images/shoe.PNG')} alt= ""  style={{width:395, margin:3, height:220  }} /></a>
                    <a className="miss" href="" ><img src={require('./images/bag.PNG')} alt= "" style={{width:395, margin:3, height:220 }}  /></a>
                    <a className="miss" href="" ><img src={require('./images/small bag.PNG')} alt= "" style={{width:395, margin:3, height:220 }}  /></a>
                </div>
            </div>
        </div>
    )
}