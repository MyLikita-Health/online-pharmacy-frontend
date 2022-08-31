import React from "react"
// import { Col, Row } from "reactstrap"
// import styled from "styled-components"
import "./card.css"
import drug from "./dryug.jpg"
import drugs from "./dryug.jpg"
// ./dryug.jpg


export default function Card(){
    return(
        <>
<div class="container">
    <div class="shop-default shop-cards shop-tech">
        <div class="row">
            <div class="col-md-3">
                <div class="block product no-border z-depth-2-top z-depth-2--hover">
                    <div class="block-image">
                        <span>
                            <img src={drug} class="img-center" />
                        </span>
                        <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
                    </div>
                    <div class="block-body text-center">
                        <h3 class="heading heading-5 strong-600 text-capitalize">
                            <span>
                                Panadol
                            </span>
                        </h3>
                        <p class="product-description">
                            mg12 pottasium chloride
                        </p>
                        <div class="product-colors mt-2">
                            <div class="color-switch float-wrapper">
                                {/* <span class="bg-purple"></a>
                                <span class="bg-pink"></a>
                                <span class="bg-blue"></a> */}
                            </div>
                        </div>
                        <div class="product-buttons mt-4">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i class="fa fa-share"></i>
                                    </button>
                                </div>
                                <div class="col-8">
                                    <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left">
                                        <i class="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    
            <div class="col-md-3">
                <div class="block product no-border z-depth-2-top z-depth-2--hover">
                    <div class="block-image">
                        <span>
                            <img src={drugs} class="img-center " />
                        </span>
                        <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
                    </div>
    
                    <div class="block-body text-center">
                        <h3 class="heading heading-5 strong-600 text-capitalize">
                            <span>
                                Boska
                            </span>
                        </h3>
                        <p class="product-description">
                           mg12 pottasium chloride
                        </p>
                        <div class="product-colors mt-2">
                            <div class="color-switch float-wrapper">
                                {/* <span class="bg-purple"></a>
                                <span class="bg-pink"></a>
                                <span class="bg-blue"></a> */}
                            </div>
                        </div>
                        <div class="product-buttons mt-4">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i class="fa fa-share"></i>
                                    </button>
                                </div>
                                <div class="col-8">
                                    <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left">
                                        <i class="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class="   col-md-3">
                <div class="block product no-border z-depth-2-top z-depth-2--hover">
                    <div class="block-image">
                        <span>
                            <img src={drugs} class="img-center " />
                        </a>
                        <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
                    </div>
    
                    <div class="block-body text-center">
                        <h3 class="heading heading-5 strong-600 text-capitalize">
                            <span>
                                Boska
                            </a>
                        </h3>
                        <p class="product-description">
                            mg12 pottasium chloride
                        </p>
                        <div class="product-colors mt-2">
                            <div class="color-switch float-wrapper">
                                {/* <span class="bg-purple"></a>
                                <span class="bg-pink"></a>
                                <span class="bg-blue"></a> */}
                            </div>
                        </div>
                        <div class="product-buttons mt-4">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i class="fa fa-share"></i>
                                    </button>
                                </div>
                                <div class="col-8">
                                    <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left">
                                        <i class="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class="col-md-3">
                <div class="block product no-border z-depth-2-top z-depth-2--hover">
                    <div class="block-image">
                        <span>
                            <img src={drugs} class="img-center " />
                        </a>
                        <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
                    </div>
    
                    <div class="block-body text-center">
                        <h3 class="heading heading-5 strong-600 text-capitalize">
                            <span>
                                Boska
                            </a>
                        </h3>
                        <p class="product-description">
                            mg12 pottasium chloride
                        </p>
                        <div class="product-colors mt-2">
                            <div class="color-switch float-wrapper">
                                {/* <span class="bg-purple"></a>
                                <span class="bg-pink"></a>
                                <span class="bg-blue"></a> */}
                            </div>
                        </div>
                        <div class="product-buttons mt-4">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i class="fa fa-share"></i>
                                    </button>
                                </div>
                                <div class="col-8">
                                    <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left">
                                        <i class="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}