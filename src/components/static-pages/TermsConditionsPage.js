import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default class TermsConditionsPage extends Component {

    componentDidMount() {
        $(window).scrollTop(0); // jq to load page on top
    }

    render() {
        return (
            <div>

                <Helmet title="Terms Of Service" />

                <h1>Terms Of Service</h1>

                {/*1*/}

                <h4>How this agreement works.</h4>

                <p>
                    <b>Introduction.</b> Welcome to Parkingaccess.com, LLC, the leading online airport parking reservation service. 
                    The Terms and Conditions Agreement ("Agreement") lists the terms of the agreement between you and Parkingaccess.com, LLC 
                    for purchasing airport parking transportation, and all other services that we provide. By completing a reservation on 
                    Parkingaccess.com, you agree to accept the terms and conditions of this Agreement and to become a registered user of this Site.
                </p>

                <p>
                    <b>Modification.</b> If we change this Agreement, we shall post a revised version of this Agreement here, which shall 
                    automatically replace the terms of this Agreement. Your continued use of the Site and the Services following parkingaccess.com’s posting of a revised Agreement will constitute your acceptance of the revised Agreement. 
                    If you do not agree with the terms of this Agreement or any revised version of this Agreement, do not continue to use the Services or this Site.
                </p>

                <p>
                    <b>Additional Policies.</b> This Agreement incorporates by reference the following policies and documents also found on this Site: <Link to="/privacy-policy">Privacy Statement</Link>
                </p>

                <p>
                    <b>Reservation Purchase Policy.</b> Our goal at parkingaccess.com is to make your purchasing experience easy, efficient and equitable, so we can get you on your way to your travel destination. The following purchase 
                    policies are designed to ensure your satisfaction and understanding of the purchase process on parkingaccess.com. If you have any questions about the information 
                    below, please contact us. 
                </p>

                {/*2*/}

                <h4>How to become a registered user.</h4>

                <p>
                    <b>Requirements.</b> To be a registered user of this Site, you must agree to accept the terms and conditions of this Agreement, and you must have a valid credit or 
                    debit card that we accept (see Section Payment Methods below for further details). You may only use the Services if you are able to form legally binding contracts, are over the age of 18, and are not temporarily or indefinitely suspended from our Sites. If you do not qualify, please do not use or try to use the Services. 
                    If you are under the age of 18, you may only use this site in conjunction with and under the supervision of your parents or guardians.
                </p>

                <p>
                    <b>Registration.</b> To
                </p>

                <p>
                    <b>Email Address and Password.</b> You will need an email address and password to access the Site and use the Services. You are solely responsible for maintaining the security of your email address and password and for all activity that occurs under your email 
                    address and password. You should not disclose your password to any other person.
                </p>

                {/*3*/}

                <h4>Payment Methods:</h4>

                <p>
                    Parkingaccess.com accepts several methods of payment to accommodate your needs, including: American Express, Discover, MasterCard, and Visa.
                </p>

                {/*4*/}

                <h4>Pricing and Availability:</h4>

                <p>
                    Parkingaccess.com sells airport ground transportation reservations on behalf of independently owned and operated transportation vendors, 
                    which means parkingaccess.com does not set the transportation rates, operate the transportation company or determine service availability. 
                    We only offer FLAT RATES, so what we quote you for a flat rate, to/from the airport is guaranteed. Additional fees may apply. 
                    Gratuity is not included in the fare.
                </p>

                {/*5*/}

                <h4>Refund Policy:</h4>

                <p>
                    We understand your travel plans may change. With that in mind, parkingaccess.com has a very simple cancellation policy: 
                    please provide us 24 hours notice prior to your pickup time and we will give you a full refund of your online deposit. 
                    Refunds normally show up on your account within 2 business days.
                </p>

                <p>
                    Unfortunately, if you neglect to cancel within 24 hours and the transportation provider initiates the service (goes to you up as scheduled), 
                    we will charge your credit card the full amount quoted online, included, fees, taxes, and gratuity.
                </p>

                {/*6*/}

                <h4>Intellectual Property</h4>

                <p>
                    Content on the Web site is our property or our Affiliates’ property and is protected by the law of copyright, trademarks, 
                    service marks, patents and other property rights. You may display, re-format and print any content you receive through our service for 
                    your personal use only. You will not re-post, transmit, reproduce, sell, publish, distribute, broadcast, perform, create derivative works 
                    from, or in any way commercially exploit any of the content, or infringe on trademarks or service marks displayed or received through our 
                    service, without our express prior consent in writing.
                </p>

                <p>
                    You also agree not to deep-link to the site for any purpose, unless we specifically authorized you to do so.
                </p>

                {/*7*/}

                <h4>Trademarks</h4>

                <p>
                    RIDEFLYRESERVATIONS, RIDEFLY OR PARKINGACCESS.COM are trademarks of Parkingaccess.com, LLC. 
                    Other marks and content on the Web sites are the property of their respective owners.
                </p>

                {/*8*/}

                <h4>Access and Interference</h4>

                <p>
                    You agree that you will not use any robot, spider, other automatic device, or manual process to monitor or copy our web pages 
                    or the content contained thereon or for any other unauthorized purpose without our prior expressed written permission. 
                    You agree that you will not use any device, software or routine to interfere or attempt to interfere with the proper working 
                    of our Web site. You agree that you will not take any action that imposes an unreasonable or disproportionately large load on our 
                    infrastructure. You agree that you will not copy, reproduce, alter, modify, create derivative works, 
                    or publicly display any content (except for your own personal, non-commercial use) from our Web site without our prior expressed 
                    written permission.
                </p>

                {/*9*/}

                <h4>Privacy Statement</h4>

                <p>
                    We have established a Privacy Statement governing your expectation of privacy in information you provide to us. 
                    Any expectation of privacy by you is subject to that Privacy Statement.
                </p>

                {/*10*/}

                <h4>Information about Yourself</h4>

                <p>
                    You represent that you are 13 years or older and will be responsible for any charges and consequences incurred in connection with your 
                    use of services. If you are less than 13 years old, please have a parent or guardian use the services on your behalf.
                </p>

                <p>
                    You agree to provide true and correct information about yourself, including your e-mail address, in any registration 
                    form, and once registered you agree to update your registration information within ten (10) days of any change in that information. Any requirement, under either this 
                    User Agreement or applicable law, that we provide you with a notice is conditioned upon your complying with this provision.
                </p>

                <p>
                    You agree to take reasonable measures to protect your user name and password from being accessed and used by others without your authority.
                </p>

                {/*11*/}

                <h4>Prohibited Activities</h4>

                <p>
                    You acknowledge that you bear an obligation not to use the services for infringing, illegal or improper purposes or in an infringing, 
                    illegal or improper manner. This includes, without limitation: (a) transmitting threatening, abusive, profane, libelous, slanderous, 
                    obscene, pornographic or harassing materials; (b) engaging in harassment, sexual in nature or otherwise, whether through language, 
                    frequency or size of messages; (c) engaging in any other purpose or activity that violates any applicable law or regulation, either 
                    foreign or domestic, or facilitates the violation of any applicable law or regulation; and (d) engaging in any other purpose or activity 
                    that we believe could subject us to criminal liability or civil penalty or judgment.
                </p>

                <p>
                    You agree not to engage in actions that could adversely affect operation of any Web site, or our ability to provide the services 
                    to other visitors. These actions include: (a) attempting to circumvent user authentication or our security (“cracking”); (b) 
                    attempting to cancel, supersede, or otherwise interfere with services being provided to other visitors; and (c) attempting to 
                    access, copy, change or erase information or data on our servers.
                </p>

                {/*12*/}

                <h4>External Links</h4>

                <p>
                    Our service includes links to other material and sites on the Internet, including materials provided by Vendors. 
                    We are not responsible for the availability of these resources, or for their contents. We do not endorse and are not responsible 
                    for any of the material, advertising, products or content on such sites. We will not be held responsible or liable, directly or 
                    indirectly, for any loss or damage caused or alleged to have been caused by use or reliance on any such content, services or products 
                    on or offered on such sites. If you have a concern about any external link on our site, please notify us.
                </p>

                {/*13*/}

                <h4>Disclaimer of Warranties and Liability</h4>

                <p>
                    The service (including all content, software, functions, materials and information accessed by any means thereof) is provided as is. 
                    To the fullest extent permissible by law, we make no warranties and shall not be liable for the use of the services, including, 
                    without limitation, any interruption of or error in the services under any circumstances, including, but not limited to, our 
                    negligence. We expressly disclaim any and all warranties of any kind, whether express or implied, including, but not limited to: 
                    (a) any warranties as to the availability, accuracy, completeness, currentness or reliability of the content available through the 
                    service, or the services itself; (b) any warranties that the services will be uninterrupted, timely, secure or error free, or that 
                    software defects will be corrected; (c) any warranty that the services will be available on a specified date or time or that we will 
                    have the capacity to meet the demand of customers during specific hours; and (d) warranties of merchantability, fitness for a 
                    particular purpose or non-infringement.
                </p>

                <p>
                    You agree and acknowledge that any content, material, executable files and/or data downloaded or otherwise obtained 
                    through the use of our service is done at your own discretion and risk and that you will be solely responsible for any 
                    damages to your computer system or network or any loss of data or system availability that results from the downloading 
                    of any such content, material, executable files and/or data.
                </p>

                <p>
                    No information or advice, whether written or oral, obtained by you from or through our service shall create any 
                    warranty not expressly made herein.
                </p>

                <p>
                    We shall not be liable to you or anyone else for any injury, damages or loss resulting from use of this service, 
                    caused in whole or in part by our negligence or events beyond our control in procuring, reporting, delivering, 
                    compiling or interpreting our service and any content accessible through the service. In no event shall we be 
                    liable to you or anyone else for any decision made or action taken by you in reliance on such content.
                </p>

                <p>
                    We shall not be liable to you or anyone else for any direct, consequential, special, incidental, indirect or other form of damages, 
                    even if we have been advised of the possibility of such damages, related to the use or the inability to use the service. You agree 
                    that our liability, if any, arising out of any kind of legal claim, whether arising in tort, contract or otherwise, in any way 
                    connected with this service or the content in this service shall not exceed the amount of $100.
                </p>

                <p>
                    You further agree that we, our employees and agents will not be liable for any lost property or data of yours or 
                    any claim or demand against you by any other party.
                </p>

                <p>
                    Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.
                </p>

                {/*14*/}

                <h4>Termination</h4>

                <p>
                    We reserve the right to suspend or to cease providing the service to you at any time for any reason. We may report to law enforcement 
                    authorities any suspected fraudulent, abusive or illegal activity. We will not be liable to you or anyone for termination of the service 
                    or any claims relating to the termination of the service.
                </p>

                <p>
                    If you object to this User Agreement or any change to it or become dissatisfied with the service in any way, your sole remedy 
                    and recourse is to immediately stop using the service. Your continued use of the service is your acceptance of this User Agreement 
                    and any and all subsequent changes to it.
                </p>

                {/*15*/}

                <h4>Modification</h4>

                <p>
                    We have the right to modify this User Agreement. Any modification is effective immediately upon posting on the 
                    Parkingaccess.com Web site. Your continued use of the services following any modification to this User Agreement 
                    shall be conclusively deemed an acceptance of all such modification(s). Your only right with respect to any dissatisfaction 
                    with any modifications made pursuant to this provision, or any of our policies or practices in providing 
                    the services, including, without limitation, (i) any change in the content of the services, or (ii) any change 
                    in the amount charged for the services, is to cease using the services.
                </p>

                {/*16*/}

                <h4>Laws</h4>

                <p>
                    This User Agreement constitutes the sole and entire agreement between us and you with respect to the services and supersedes any 
                    other prior agreement. This agreement is entered into in the State of Connecticut, USA and will be governed by its laws and the 
                    intellectual property laws of the United States of America, without regard to conflict of laws provisions.
                </p>

                <p>
                    With respect to any claim, issue, action or dispute, to which Parking Access, LLC or an affiliate is a party, regarding or 
                    related to a Web site or the services, the Federal and state courts of the State of Connecticut, County of Middlesex shall 
                    have exclusive jurisdiction and venue over all such actions.
                </p>

                <p>
                    You consent to personal jurisdiction in the Federal and state courts of the State of Connecticut, County of Middlesex for 
                    any action arising out of or relating to your use of the services. Any action brought by you or us arising out of this agreement, 
                    its performance or non-performance shall be brought, if at all, within one (1) year of a cause of action arising. In the event that 
                    any portion of this User Agreement is held unenforceable, the unenforceable portion shall be construed in accordance with applicable 
                    law as nearly as possible to reflect the original intentions of the parties, and the remainder of the provisions shall remain in full 
                    force and effect.
                </p>

                {/*17*/}

                <h4>Non-Waiver</h4>

                <p>
                    Our failing to act at any time or times on any one or more violations of this User Agreement will not preclude us from acting on 
                    them or exercising our right to remove content and terminate your account at any time thereafter.
                </p>

                {/*18*/}

                <h4>Indemnification</h4>

                <p>
                    You agree to indemnify, defend and hold us harmless from and against any and all liability and costs incurred by us in connection 
                    with any claim arising out of your use of the services or any breach by you of this User Agreement, or incurred by us in responding to a 
                    third-party claim that you have used the services in an infringing, illegal or improper manner, including, without limitation, reasonable 
                    attorneys’ fees and costs. You agree to cooperate as fully as reasonably required in the defense of any claim. We reserve the right, at our 
                    own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you and you shall not in any 
                    event settle any matter without our written consent.
                </p>

                {/*19*/}

                <h4>Definitions: “We,” “Us,” “You,” “Our Service” and “This Service”</h4>

                <p>
                    In this agreement, “we” and “us” mean Parkingaccess.com, LLC its managers, officers, employees, independent contractors, agents, service 
                    providers and affiliates.
                </p>

                <p>
                    “Service” “Our service” and “this service” mean the Web site and any service, whether free or for a fee or subscription, provided 
                    through the Web site by us or our agents or Vendors.
                </p>

            </div>
        );
    }
}