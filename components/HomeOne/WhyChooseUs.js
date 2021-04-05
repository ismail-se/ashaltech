import React, { Component } from 'react'

export default class WhyChooseUs extends Component {
    
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("wcu_tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }


    render() {
        return (
            <div className="choose-us-six-area ptb-100 overflow-hidden">
                <div className="container"> 
                    <div className="choose-us-six-content">
                        <div className="tab">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab1')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            IT SECURITY SOLUTIONS
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab2')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            IT INFRASTRUCTURE SOL.
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab3')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            HEALTHCARE SOLUTIONS
                                        </li> 
                                    </ul> 
                                </div>
                                <div className="col-lg-9">
                                    <div className="tab_content">
                                        <div id="wcu_tab1" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>IT SECURITY SOLUTIONS</h3>
                                                            <p>Whether your organization is in need of PC protection, data security management, Internet security, network and data security, spyware protection, computer data security, wireless network security, or virus removal, we’ve got it.</p>
                                                            <p>Don’t risk everything you’ve worked for. Defend everything you’ve worked for, with Computer Data Security and Virus Removal that won’t keep you up at night.</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>OUR IT SECURITY SOLUTIONS INCLUDE:</h3>
                                                            <ul>
                                                                <li><i className="bx bx-check"></i> Firewall Systems</li>
                                                                <li><i className="bx bx-check"></i> Anti-Virus & Anti-SPAM Solutions</li>
                                                                <li><i className="bx bx-check"></i> Data Protection Systems</li>
                                                                <li><i className="bx bx-check"></i> Data Security & Theft Prevention</li>
                                                                <li><i className="bx bx-check"></i> Wireless Security</li>
                                                                <li><i className="bx bx-check"></i> Network Security Policy Setup & Maintenance</li>
                                                                <li><i className="bx bx-check"></i> Unified Threat Management</li>
                                                                <li><i className="bx bx-check"></i> Secure Internet Gateway Assessment</li>
                                                                <li><i className="bx bx-check"></i> Penetration Testing</li>
                                                                <li><i className="bx bx-check"></i> Security Operation Center (SOC)</li>
                                                                <li><i className="bx bx-check"></i> Security Incident Event Management System (SIEM)</li>
                                                                <li><i className="bx bx-check"></i> Information Security Awareness Training</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div id="wcu_tab2" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>IT INFRASTRUCTURE SOLUTIONS</h3>
                                                            <p>ASHAL TECH offers comprehensive, cost efficient solutions and services that help you align your IT infrastructure to support your business strategy. Whether you need help with managing your messaging and computing platforms, securing your network or managing your application operations, we will deliver a flexible solution.</p>
                                                            <p>Experts from ASHAL TECH are capable of addressing your IT challenges by delivering solutions and services that consist of simpler & flexible IT infrastructures that meeting business demands and budgets.</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>OUR IT INFRASTRUCTURE SOLUTIONS INCLUDE:</h3>
                                                            <ul>
                                                                <li><i className="bx bx-check"></i> Data Center</li>
                                                                <li><i className="bx bx-check"></i> Server Solutions</li>
                                                                <li><i className="bx bx-check"></i> Network Solutions</li>
                                                                <li><i className="bx bx-check"></i> Data Storage Solutions</li>
                                                                <li><i className="bx bx-check"></i> Backup & Data Protection</li>
                                                                <li><i className="bx bx-check"></i> Disaster Recovery Solutions</li>
                                                                <li><i className="bx bx-check"></i> Virtualization</li>
                                                                <li><i className="bx bx-check"></i> VPN Connectivity Solutions</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div id="wcu_tab3" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>HEALTHCARE SOLUTIONS</h3>
                                                            <p>The healthcare industry today is a very complicated industry. Its dependence on IT infrastructure is aimed to deliver better services to an increasingly product conscious consumer. The problems faced are enormous, from regulatory compliance to state and federal mandates, and the need to offer customized services. Besides, accuracy is a pre-requisite and any minor error can lead to severe consequences leading to negative brand value as well as legal complicates. ASHAL TECH provide the services to enable to face challenges in the Healthcare industry.</p>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>OUR HEALTHCARE SOLUTIONS INCLUDE:</h3>
                                                            <ul>
                                                                <li><i className="bx bx-check"></i> Robotic Dispensing Systems</li>
                                                                <li><i className="bx bx-check"></i> Pharmacy Workflow Systems</li>
                                                                <li><i className="bx bx-check"></i> Pharmacy Management Software</li>
                                                                <li><i className="bx bx-check"></i> Nurse Call Systems</li>
                                                                <li><i className="bx bx-check"></i> Patient Management Software</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
