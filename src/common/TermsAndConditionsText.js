// @flow
import React from 'react';

import styled from 'styled-components';
import variables from '../ui/variables';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${variables.colorWhite};
  font-size: 14px;
  line-height: 2em;
  text-align: justify;
  ol {
    counter-reset: item;
  }

  ol > li {
    counter-increment: item;
  }

  ol ol > li {
    display: block;
  }

  ol ol > li:before {
    content: counters(item, '.') '. ';
    margin-left: -20px;
  }

  .bold {
    font-weight: bold;
  }

  .title {
    padding-top: 2em;
  }
`;

export const TermsAndConditionsText = () => (
  <Container>
    <div>
      The Website and the Services offered by Change are NOT ADDRESSED TO AND
      MAY NOT BE USED BY:
      <ul>
        <li>
          persons who DO NOT have their place of residence in any of the
          contracting states of the European Economic Area; and
        </li>
        <li>persons who are NOT at least 18 years of age.</li>
      </ul>
      These Terms constitute a legally binding agreement between Change and each
      User, relating to the use of the Services of Change by the User. By
      opening an Account or commencing the use of the Services, each User
      confirms that it fully agrees to all the terms and conditions contained in
      these Terms. If a User does not agree to the terms and conditions
      contained in these Terms, then the User may not use the Services.If you
      have any questions regarding these Terms or the Services, please contact
      Change at a{' '}
      <a
        href="mailto:support@getchange.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        support@getchange.com
      </a>. In addition to these Terms, each User is obliged to comply with the
      technical rules associated, as well as the terms, conditions, rules and
      requirements contained in any other documents referred to in these Terms,
      on the Website or in the Apps. <br />
      <br />
    </div>

    <div>
      <ol>
        <li>
          <span class="bold title">INTERPRETATION AND DEFINITIONS</span>
          <ol>
            <li>
              As used in these Terms, including the preamble hereof, unless
              expressly otherwise stated or evident in the context, the
              following capitalised terms and expressions shall have the
              following meanings:
              <ol>
                <li>
                  <span class="bold">Account</span> – the account opened with
                  Change by a User, using which the User can access the
                  Services.
                </li>
                <li>
                  <span class="bold">Apps</span> – the Android, web and iOS
                  mobile apps of Change, which give access to the Services.
                </li>
                <li>
                  <span class="bold">Change</span> or{' '}
                  <span class="bold">Company</span> – xChange AS, an Estonian
                  limited liability company registered under registry code
                  14428150, Rävala pst 4, 10143 Tallinn. References to “<span class="bold">we</span>”, “<span class="bold">
                    us
                  </span>” and “<span class="bold">our</span>” mean references
                  to Change.
                </li>
                <li>
                  <span class="bold">Change Tokens</span> or{' '}
                  <span class="bold">Tokens</span> – cryptographic ERC-20 tokens
                  issued by Change, which are at the date of these Terms and
                  Conditions trading on the cryptocurrency market KuCoin (<a
                    href="https://www.kucoin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.kucoin.com/
                  </a>) as Change Coin (CAG). The list of cryptocurrency markets
                  on which the Tokens are tradable may be amended by Change at
                  its full discretion at any time without providing any prior
                  notification thereof.
                </li>
                <li>
                  <span class="bold">Conversion Rate</span> – the price of one
                  unit of a given supported cryptocurrency in terms of a
                  specified Fiat currency or another supported cryptocurrency,
                  as quoted in the Apps and on the Website. The Conversion Rate
                  is stated as a "Buy Price", which is the price of one unit of
                  a supported cryptocurrency in terms of a specified Fiat
                  currency or another supported cryptocurrency with which the
                  eligible User may buy or has bought from Change the given
                  supported cryptocurrency in exchange for the specified Fiat
                  currency or another supported cryptocurrency, and as a “Sell
                  Price", which is the price of one unit of a supported
                  cryptocurrency in terms of a specified Fiat currency or
                  another supported cryptocurrency at which the eligible User
                  may sell or has sold the given supported cryptocurrency to
                  Change in exchange for the specified Fiat currency or another
                  supported cryptocurrency. Change may add a margin or “spread”
                  within the quoted Conversion Rate and Users agree to accept
                  the Conversion Rate as the sole conversion metric.
                </li>
                <li>
                  <span class="bold">Conversion Service</span> – regulated
                  service of cryptocurrency conversion (for which the Company
                  has been issued a license by the Estonian Financial
                  Intelligence Unit, no FVR000034) through which Users can buy
                  supported cryptocurrencies from Change, in exchange for
                  specified Fiat currencies and other supported cryptocurrencies
                  and specified Fiat currencies from Change, in exchange for
                  supported cryptocurrencies, as further described in Section 7
                  below.
                </li>
                <li>
                  <span class="bold">Custodian</span> – the person who holds and
                  is responsible for the safekeeping of the cryptocurrencies
                  and/or tokens (including the Tokens) transferred to or held in
                  the Wallet by the User, who at the date of these terms and
                  conditions is Bitgo Inc.
                </li>
                <li>
                  <span class="bold">Fiat</span> – currency that has been
                  declared as legal tender by a government and is regulated by a
                  central financial institution (dollars, euros, yen etc).
                </li>
                <li>
                  <span class="bold">Party</span> – each of the User and Change.
                </li>
                <li>
                  <span class="bold">Services</span> – services provided by
                  Change to the Users, including the Wallet Service and the
                  Conversion Service.
                </li>
                <li>
                  Taxes ‒ taxes, levies, duties or similar governmental
                  assessments of any nature, including, for example,
                  value-added, sales, use or withholding taxes, assessable by
                  any jurisdiction whatsoever.
                </li>
                <li>
                  <span class="bold">Terms</span> – these Terms and Conditions,
                  as amended from time to time.
                </li>
                <li>
                  <span class="bold">User</span> – anyone who uses the Website,
                  Apps and/or Services provided by Change. References to “you”
                  and “your” mean references to the User.
                </li>
                <li>
                  <span class="bold">Wallet</span> ‒ the User’s cryptocurrency
                  wallet, which can be accessed via the Website or the Apps.
                </li>
                <li>
                  <span class="bold">Wallet Service</span> ‒ regulated service
                  of a cryptocurrency wallet (for which the Company has been
                  issued a license by the Estonian Financial Intelligence Unit,
                  no FRK000026), as further described in Section 6 below.
                </li>
                <li>
                  <span class="bold">Website</span> – website located at
                  https://getchange.com/ and all subdomains of such website.
                </li>
              </ol>
            </li>
            <li>
              In these Terms, unless the context otherwise requires, a reference
              to:
              <ol>
                <li>a Section is a reference to a section of these Terms;</li>
                <li>
                  a person shall include a reference to its legal successors and
                  permitted assigns;
                </li>
                <li>
                  words denoting the singular include the plural and vice versa,
                  words denoting persons include physical as well as legal
                  persons; and
                </li>
                <li>
                  a document is a reference to that document as may be amended
                  or supplemented from time to time.
                </li>
              </ol>
            </li>
            <li>
              In these Terms, “including” and “include” shall be deemed to be
              followed by “without limitation” where not so followed.
            </li>
            <li>
              Any obligation of a Party not to do something includes an
              obligation not to allow that thing to be done.{' '}
            </li>
            <li>
              The headings of these Terms are for convenience of reference only
              and do not in any way limit or affect the meaning or
              interpretation of the provisions of the Terms.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">GENERAL CONDITIONS AND ACCOUNT OPENING</span>
          <ol>
            <li>
              To use the Services, the User must have opened an Account with
              Change, and any use of the Services must be carried out by the
              User exclusively through the Account opened for the User. One
              digital identity associated with the Account will be used for
              accessing all Services.
            </li>
            <li>
              By opening an Account or starting to use the Services, the User
              confirms that the User fully agrees to all the terms and
              conditions contained in these Terms.
            </li>
            <li>
              Each User must be at least 18 years of age to register for an
              Account or to use any of the Services.
            </li>
            <li>
              Change reserves the right to decide whether to open an Account
              and/or whether to provide Services to any persons and shall have
              no obligation to justify or outline the reasons for any rejection.
            </li>
            <li>
              All information that the User provides to Change at any time
              (including but not limited to the information provided upon the
              opening of the Account) must be accurate, current and complete and
              may not be misleading in any respect. Change may, from time to
              time, request such information to be updated and/or supplemented,
              in which case the User is obliged to provide Change with the
              updated and/or supplemented information without delay. If the User
              is not able or willing to update such information, Change has the
              right to close the User’s Account and/or restrict the User from
              accessing the Services.
            </li>
            <li>
              By opening an Account and using the Services, each User fully
              acknowledges that Change does not provide to the User any
              investment service or advice. Any information provided by Change
              on its Website or Apps should not be considered investment advice
              or recommendation, and independent professional advice should be
              sought where appropriate.
            </li>
            <li>
              Information on the fees payable for the Services is accessible
              through or on the Website and/or the Apps.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">RISKS</span>
          <ol>
            <li>
              Each User acknowledges that using the Services involves various
              types of risks, including but not limited to risks relating to the
              fluctuation of the value of any assets related to the Services
              (including Change Tokens), technical imperfections of Change
              Tokens, other cryptocurrencies, the Website and the Apps,
              regulatory uncertainties, and risks related to the operations and
              financial viability of Change. It is the obligation of each User
              to learn about and understand all the risks involved with the
              Services. Change strongly advises each User not to use the
              Services without sufficient understanding of the risks involved.
            </li>
            <li>
              Change encourages each User to consult with a financial advisor or
              other appropriate professional prior to starting to use the
              Services.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">GEOGRAPHICAL RESTRICTIONS</span>
          <ol>
            <li>
              Change administers and operates the Website and Apps from its
              location in Estonia. Although the Website and Apps are accessible
              worldwide, not all features, products or services discussed,
              referenced, provided or offered through or on the Website or Apps
              are available to all persons or in all geographic locations, nor
              are they appropriate or available for use outside Estonia.
            </li>
            <li>
              Change reserves the right to limit, in its sole discretion and
              without providing any justification related thereto, the provision
              and quantity of any feature, product or Service to any person or
              geographic area.
            </li>
            <li>
              Any offer for any feature, product or Service made through or on
              the Website or Apps is void where prohibited.
            </li>
            <li>
              If a User chooses to access the Website or download or access any
              of the Apps from outside Estonia, the User is solely responsible
              for complying with applicable local laws.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">SECURITY</span>
          <ol>
            <li>
              Each User is responsible for maintaining adequate security and
              control of any and all login IDs, passwords, private keys,
              personal identification numbers (PINs), and any other codes or
              devices which are intended to or can otherwise be used to access
              the Account and/or use the Services.
            </li>
            <li>
              Each User must prevent unauthorized access to the Account and
              unauthorized use of the Services, the User’s account credentials
              or private keys, and must promptly notify Change of any such
              unauthorized access or use.
            </li>
            <li>
              Each User has an obligation to fully and timely cooperate with
              Change in the investigation of any suspected unauthorized access
              to the Account or use of the Services.
            </li>
            <li>
              Each User will be solely responsible, and to the maximum extent
              permissible under applicable legal acts, Change will have no
              liability, for any activity that takes place with the User’s
              Account if the Account has been accessed with the User’s account
              credentials, regardless of whether or not such access has been
              authorized by the User.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">WALLET</span>
          <ol>
            <li>
              Change provides to Users the service of a cryptocurrency wallet
              (Wallet Service) pertaining to the User’s Wallet. The Wallet
              Service entails enabling Users to interface with certain
              cryptocurrency networks listed in the Apps and on the Website, to
              view and transmit information about public cryptographic keys.
              Change has a right to unilaterally decide and change the
              cryptocurrencies which can be stored in the Wallet using the
              Wallet Service or converted using the Conversion Service.
            </li>
            <li>
              Upon using the Wallet Service each User is obliged to fully adhere
              to the terms and conditions of the Custodian, in addition to
              adhering to these Terms.
            </li>
            <li>
              Change is not a custodian of any cryptocurrency and/or tokens
              (including the Tokens) transferred to or held in the Wallet. All
              cryptocurrencies and tokens (including the Tokens) are held by the
              Custodian. Change reserves the right to change the Custodian at
              any time, without prior notification or justification thereto. To
              the maximum extent permissible under applicable legal acts, Change
              assumes no liability for any possible damages caused by the
              Custodian.
            </li>
            <li>
              Upon the creation of the Account, the Wallet is automatically
              created for each User, together with a public key which serves as
              the address of the Wallet. Change has the sole right to decide
              whether or not to disclose that public key to the User. Change may
              (but is not obliged to) disclose the public keys only to some
              Users chosen (at the full discretion of Change) and may at any
              time and without any prior notice to the Users stop or commence
              disclosing the public keys to the Users.
            </li>
            <li>
              To transmit information concerning the Account to the relevant
              cryptocurrency network (i.e. to carry out a transaction with
              cryptocurrency), two private keys (out of three private keys in
              total) are required. One of such private keys is held by Change,
              the other by the Custodian and the third is held by a third-party
              backup service provider.
            </li>
            <li>
              The User shall be solely responsible for the safekeeping of the
              third private key. If the User appoints a third party to control
              its private key, whether or not such appointment is made through
              the Website or the Apps, Change will not be responsible for the
              actions or omissions of such third party.
            </li>
            <li>
              Change does not own or control the underlying software protocols
              which govern the operation of cryptocurrencies held in the Wallet.
              Such protocols are subject to changes in protocol rules, which are
              outside the control of Change and may materially affect the value,
              function, or name of the relevant cryptocurrency. Each user
              acknowledges and agrees that:
              <ol>
                <li>
                  Change is not responsible for operation of the underlying
                  cryptocurrency protocols and that Change makes no guarantee of
                  their functionality, security, or availability; and
                </li>
                <li>
                  if a change in the software protocol related to the
                  cryptocurrency occurs, Change may suspend the Wallet Service,
                  and Change may decide not to provide Wallet Service for the
                  cryptocurrency being affected or may configure the Wallet
                  Service to enable the User to transfer the affected
                  cryptocurrency.
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">CONVERSION SERVICE</span>
          <ol>
            <li>
              Change provides to certain eligible Users (depending on their
              domicile and other factors, determined at the sole discretion of
              Change) the Conversion Service, by which eligible Users may buy
              from and sell to Change supported cryptocurrencies, in exchange
              for specified Fiat currencies and other supported
              cryptocurrencies.
            </li>
            <li>
              Change makes the transactions described in Section 7.1 above on
              the basis of irrevocable instructions from the User eligible for
              Conversion Service, which can be submitted by such Users through
              the Apps or Website.
            </li>
            <li>
              Users are not allowed to cancel, reverse, or change any
              transaction marked as complete or pending after the submission of
              an instruction submitted in accordance with Section 7.2 above. If,
              after the submission of an instruction in accordance with Section
              7.2 above by an eligible User, Change determines that it is
              unwilling to carry out the transactions requested by the eligible
              User in its instructions, Change may decline to carry out the
              transaction by notifying the User thereof on the Website and in
              the Apps, and shall assume no liability for any damages which
              arise to the eligible User as a result thereof.
            </li>
            <li>
              The Website and Apps will display to Users for all supported
              cryptocurrencies the estimated Conversion Rate or exact Conversion
              Rate for transaction marked as complete. The estimated Conversion
              Rate will also be brought out in the instructions submitted in
              accordance with Section 7.2 above and upon submitting to Change an
              instruction in accordance with Section 7.2 above, the eligible
              User must irrevocably confirm its request to carry out the
              transaction without certainty of Conversion Rate.
            </li>
            <li>
              After receiving from an eligible User instructions in accordance
              with Section 7.2 above, Change will complete the transaction
              requested by the eligible User in its instructions within 5
              business days after receiving the payment (whereas a business day
              is considered to be a day when banks are generally open for
              business in Estonia), unless Change declines to carry out the
              transaction and notifies the User in accordance with Section 7.3
              above. Change reserves the right to delay any Conversion Service
              transaction if it perceives a risk of fraud or illegal activity.
            </li>
            <li>
              In case the eligible User requests in its instructions submitted
              in accordance with Section 7.2 above to buy from Change a
              supported cryptocurrency in exchange for a specified Fiat
              currency, the User must within 15 business days transfer to the
              bank account of Change (using the payment instructions displayed
              to the User in the Apps or Website) the amount of specified Fiat
              currency required for the transaction, as shown to the User in the
              Apps or Website. In case the eligible User requests in its
              instructions submitted in accordance with Section 7.2 above to buy
              from Change a supported cryptocurrency in exchange for another
              supported cryptocurrency, the amount of supported cryptocurrency
              which is to be transferred by the User to Change in exchange for
              the requested supported cryptocurrency will be automatically
              debited from the User’s Wallet. In case the eligible User requests
              in its instructions submitted in accordance with Section 7.2 above
              to sell to Change a supported cryptocurrency in exchange for a
              specified Fiat currency, the amount of supported cryptocurrency
              which is to be transferred by the User to Change in exchange for
              the requested Fiat currency will be automatically debited from the
              User’s Wallet. In case the eligible User breaches any of its
              obligations prescribed in this Section 7.6, Change has the right
              (but not an obligation) to refuse to carry out the transactions
              requested by the User by notifying the User thereof on the Website
              and in the Apps, and shall assume no liability for any damages
              which arise to the eligible User as a result thereof.
            </li>
            <li>
              In case the eligible User has in its instructions submitted a
              request to buy from Change a supported cryptocurrency, the amount
              of supported cryptocurrency bought by the User will after the
              completion of the relevant transaction be transferred to the
              User’s Wallet. In case the eligible User has in its instructions
              submitted a request to sell to Change a supported cryptocurrency
              in exchange for a specified Fiat currency, the amount of specified
              Fiat currency will be transferred after the completion of the
              relevant transaction to the User’s account specified in the User’s
              instruction, issued in accordance with Section 7.2 above.
            </li>
            <li>
              Change does not guarantee the availability of its Conversion
              Service, and the act of buying supported cryptocurrency is not and
              may not be considered a guarantee from Change that the User could
              sell the cryptocurrencies or Fiat currencies obtained using the
              Conversion Service back to Change.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">
            PRINCIPLES OF ASSESSMENT, MANAGEMENT AND MITIGATION OF RISKS RELATED
            TO MONEY LAUNDERING AND TERRORIST FINANCING
          </span>
          <ol>
            <li>
              In order to manage the risk of money laundering and terrorist
              financing, and to abide by the statutory obligations applicable to
              Change, Change follows, and the Users are obliged to follow
              certain principles of customer due diligence, as further specified
              in this Section.
            </li>
            <li>
              User is not allowed to use the Services nor the Wallet for any
              activities which are related to or facilitate money laundering or
              terrorist financing.
            </li>
            <li>
              Change reserves the right to, at any time:
              <ol>
                <li>identify each User;</li>
                <li>
                  request from User any documents, either as originals or as
                  copies (as Change considers appropriate) and information
                  (including personal), which Change considers relevant for the
                  identification of the User or for the mitigation of money
                  laundering and terrorist financing risks;
                </li>
                <li>
                  regularly control the User’s data and documents which are used
                  for identification and/or for the mitigation of money
                  laundering and terrorist financing risks;
                </li>
                <li>
                  transfer and disclose any information and documents received
                  in accordance with this Section 8 to any and all governmental
                  authorities and other persons to whom Change is obliged to
                  transfer and disclose information and documents in accordance
                  with applicable legal acts;
                </li>
                <li>
                  transfer and disclose any information and documents received
                  in accordance with this Section 8 to any and all third-party
                  service providers, which Change uses to fulfil its obligations
                  related to client identification and money laundering and
                  terrorist financing prevention; and
                </li>
                <li>
                  transfer and disclose any information and documents received
                  in accordance with this Section 8 to the Custodian.
                </li>
              </ol>
            </li>
            <li>
              Each User acknowledges that Change may upon the fulfilment of its
              obligations related to client identification and money laundering
              and terrorist financing prevention use the services of third-party
              service providers, and each User hereby grants its irrevocable and
              unconditional consent to such use of third-party service providers
              and the transfer and disclosure of information regarding the User
              to such third-party service providers.
            </li>
            <li>
              Each User acknowledges that Change may transfer and disclose to
              the Custodian any information and documents referred to in this
              Section 8, for the purpose of allowing the Custodian to fulfil
              their obligations related to client identification and money
              laundering and terrorist financing prevention, and each User
              hereby grants its irrevocable and unconditional consent to such
              transfer and disclosure of information.
            </li>
            <li>
              Each User is obliged to immediately inform Change in writing of
              any changes to the information and documents provided to Change,
              inter alia:
              <ol>
                <li>
                  change of your name, address or other contact information;
                </li>
                <li>change of data regarding your identity document; and</li>
                <li>
                  loss or theft of your identity document or credentials used
                  for Change Account or Services.
                </li>
              </ol>
            </li>
            <li>
              Each User is obliged to inform Change in writing of any other
              information which might be relevant in relation to client
              identification and money laundering and terrorist financing
              prevention, immediately after becoming aware of such information.
            </li>
            <li>
              Each User is obliged to fully and timely cooperate with Change
              upon the gathering of information and documents referred to in
              this Section 8, as well as the fulfilment of any other obligations
              Change has in relation to client identification and money
              laundering and terrorist financing prevention under applicable
              legal acts. Should a User refrain from cooperation in accordance
              with Change in accordance with this Section 8.8, Change has the
              right to:
              <ol>
                <li>stop the provision of any Services to the User;</li>
                <li>
                  block the Account and limit the User’s access to the Website
                  and the Apps; and
                </li>
                <li>
                  withhold any payments made by or to the User in relation to
                  the Services.
                </li>
              </ol>
            </li>
            <li>
              In addition to Section 8.8, Change reserves the right to block the
              usage of the User’s Account and limit the User’s access to the
              Website and the Apps, when Change suspects that:
              <ol>
                <li>
                  the Account is being used by any person other than the User;
                </li>
                <li>an offence is being committed, using the Account; and</li>
                <li>
                  any of the information or documents provided by the User to
                  Change or its third-party service providers may be untrue, and
                  the User does not provide evidence, satisfactory to Change,
                  proving the correctness of the information and documents.
                </li>
              </ol>
            </li>
            <li>
              To the maximum extent permissible under applicable legal acts,
              Change assumes no liability for any damage caused to the User or
              any other persons by the actions provided for in Sections 8.8 and
              8.9.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">CLOSING THE ACCOUNT</span>
          <ol>
            <li>
              Each User has a right to close its Account at any time, subject to
              the User having no outstanding obligations towards Change nor the
              Custodian. From the moment of closing the Account, the User shall
              not be entitled to use any of the Services.
            </li>
            <li>
              In addition to specific circumstances described elsewhere in these
              Terms, Change reserves the right to close the Account of the User:
              <ol>
                <li>
                  without any justification, by giving the User an advance
                  notice of at least 14 days and refunding to the User the
                  market value of any assets which the User has in the Wallet,
                  for which such services have not yet been provided and cannot
                  be provided after the closing of the Account;
                </li>
                <li>
                  in case the User breaches: (i) these Terms; (ii) the terms and
                  conditions of the Wallet Custodian; or (iii) any other terms
                  and conditions referred to in these Terms or otherwise binding
                  on the User, without giving any notice in advance; and
                </li>
                <li>
                  in case closure of the Account is required by a competent
                  authority, without giving any notice in advance.
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">LIABILITY</span>
          <ol>
            <li>
              Each User is liable for and shall be obliged to compensate to
              Change any and all damages (including the loss of profits), which
              arises from the activities of the User.
            </li>
            <li>
              Change is liable for and shall be obliged to compensate to Users
              only direct monetary damages (and for the avoidance of doubt, no
              indirect damages or loss of profits) and only on the condition
              that such damages are caused to the User by Change either
              intentionally or due to gross negligence.
            </li>
            <li>
              The liability of Change is reduced by the amount equal to the
              damages which the User could have avoided by taking reasonable
              efforts.
            </li>
            <li>
              In addition to the limitations described elsewhere in these Terms,
              to the maximum extent permissible under applicable legal acts,
              Change assumes no liability for any damages caused by third
              parties (including but not limited to the Custodian) or by
              circumstances outside the control of Change (including but not
              limited to volatility of cryptocurrencies).
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">
            INFORMATION TECHNOLOGY AND INTELLECTUAL PROPERTY
          </span>
          <ol>
            <li>
              Unless otherwise stated, all materials including, but not limited
              to, logos, brand names, designs, images, photographs, video clips,
              written are copyrights, trademarks, service marks, and any other
              forms of intellectual property present in the Services or
              displayed in connection with the Services (e.g. in the Website),
              protected by registration or not, are owned by or licensed to
              Change. The foregoing also applies towards any software solutions
              or parts of it, programs and code present in the Service.
            </li>
            <li>
              Change grants to the User a limited, non-exclusive, not
              sub-licensable licence to access and use the materials, as
              specified in Section 11.1 of these Terms, for the User’s personal
              use, as required for the use of Services.
            </li>
            <li>
              No User is allowed to sell, distribute, publicly display, modify,
              otherwise alter or make any derivative use of the materials, as
              specified in Section 11.2 of these Terms, or any portion thereof,
              unless such User has been granted an express and written prior
              permission to do so by Change.
            </li>
            <li>
              The licence granted under Section 11.2 will automatically
              terminate upon the closing of the Account. Thereafter the User is
              no longer allowed to access or use any part of the material
              belonging to Change.
            </li>
            <li>
              In case the User’s actions or activities conducted in connection
              with the Service or while using the Service (including but not
              limited, through providing us feedback or leaving any comments
              addressed Change) amount to copyright protected work under
              applicable legislation, the User will automatically grant to
              Change, from the moment of the creation of such work, a
              non-exclusive, world-wide, sub-licensable, free-of-charge licence,
              which is valid until the copyright is protected under applicable
              legislation, in relation to such work.
            </li>
            <li>
              As stated in Section 11.1 of these Terms, Change retains full
              ownership and/or exclusive licence of any software, program, code
              or parts of it. The foregoing might be protected by security
              measures, which you are not authorized to change, disseminate,
              hack or alter in any way.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">PRIVACY POLICY</span>
          <ol>
            <li>
              Change is to be considered a data controller in respect of your
              personal data collected and processed in respect of providing
              Services to the Users. Change can be reached via{' '}
              <a
                href="mailto:dpo@getchange.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                dpo@getchange.com
              </a>.
            </li>
            <li>
              Change has appointed a data protection officer, who is Marek
              Pajussaar and who can be reached via{' '}
              <a
                href="mailto:dpo@getchange.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                dpo@getchange.com
              </a>.
            </li>
            <li>
              Change is processing Users’ personal data for the performance of
              or entering into a contract, in the form of the Terms, concluded
              or to be concluded with the Users. Each User’s personal data is
              processed for the purposes of providing the Services to the User.
              Without processing the User’s personal data, Change would be
              unable to provide Services to the User.
            </li>
            <li>
              For complying with our legal obligations deriving from applicable
              legislation, as specified in Section 8 above and for meeting our
              accounting/financial obligations, we are also processing Users’
              personal data on the basis of legislation. For complying with our
              legal obligations, as specified in Section 8 above, Change may
              receive data from other sources than the User, e.g. from public
              and non-public sources.
            </li>
            <li>
              The personal data of Users is being processed by the following
              categories of data recipients: Change’s employees responsible for
              specific tasks regarding the Services, data processors who help
              Change with providing the Services (e.g. service providers for the
              maintenance of our IT-systems and for fulfilling our legal
              obligations as stated in Section 8 above) and third persons to
              whom Change is required to transfer data under applicable
              legislation, e.g. relevant state institutions and sector-specific
              authorities.
            </li>
            <li>
              Change has engaged a third-party service provider, Onfido Ltd, for
              obtaining certain information required in relation to the
              fulfilment of its obligations under anti-money laundering and
              terrorist financing prevention rules. While providing services to
              Change, Onfido Ltd processes your personal data as a data
              processor, however, for enhancing its machine learning
              capabilities Onfido Ltd is also processing Users’ personal data as
              a data controller. To acquaint itself with the relevant data
              processing activities which Onfido Ltd undertakes as a data
              controller the User should read and review the privacy policy
              located on{' '}
              <a
                href="https://onfido.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://onfido.com/privacy/
              </a>. The Users should be aware that Change takes no
              responsibility in relation to processing activities Onfido Ltd
              undertakes as a data controller and the Users are free to exercise
              their rights as data subjects in relation to Onfido Ltd fully and
              independently.
            </li>
            <li>
              Certain activities of Change may result in the transferring of
              personal data to third countries, meaning countries located
              outside the EU/EEA, and to countries in relation to which the EU
              Commission has not issued an adequacy decision, e.g. the US. For
              ensuring that the User’s data is protected, Changes applies
              appropriate safeguards in the form of standard data protection
              clauses adopted by the European Commission for the transfers. In
              case the User wishes to know more about the safeguards and obtain
              a relevant copy of them, please contact Change using the details
              specified in Section 12.2 above.
            </li>
            <li>
              Change is not responsible for the actions and processing
              activities of any third parties. Third parties are considered to
              be separate data controllers, whose services can be procured by
              concluding separate agreements with them. Third parties may
              transfer Users’ personal data to third countries and process it
              for independent purposes.
            </li>
            <li>
              Users’ personal data is, generally, retained as long as the User
              is using the Services. After the User has stopped using the
              Services and the Account of the User has been closed, pursuant to
              Section 9 above, the User’s personal data shall be retained as
              long as any claims can be presented on the basis of such data
              under applicable legislation. Certain data, e.g. data necessary
              for accounting purposes, data obtained for the purposes of the
              fulfilment of obligations related to anti-money laundering and
              terrorist financing prevention, shall be retained as required
              under applicable legislation and industry standards.
            </li>
            <li>
              For entering into a contract and for the performance of a contract
              between the User and Change, Change is applying certain automated
              decision-making methods to assess the User’s capability and
              suitability, among other for the purposes indicated in Section 8
              above, to enter into a contract between the User and Change.
              Change is applying the capability of human-intervention into the
              aforesaid assessment, however, in cases the User is seen as not
              suitable for entering into the contract, in the form of the Terms,
              Change reserves the right not to enter into or stop the
              performance of the contract.
            </li>
            <li>
              Each User, as a data subject, is, at any time, entitled to
              exercise the following rights:
              <ol>
                <li>
                  the right to request the correction of the User’s personal
                  data;
                </li>
                <li>
                  the right to request access to the User’s personal data;
                </li>
                <li>
                  the right to request the erasure of the User’s personal data;
                </li>
                <li>
                  the right to request the restriction of processing of the
                  User’s personal data;
                </li>
                <li>
                  the right to object to the processing of the User’s personal
                  data;
                </li>
                <li>
                  the right to exercise data portability in cases where such
                  data has been provided for the performance of or entering into
                  a contract or has been provided under the consent*; and
                </li>
                <li>
                  the right to lodge a complaint to a supervisory authority.
                </li>
              </ol>
            </li>
            <li>
              Clauses marked with “*” will become applicable with the
              application of the EU’s General Data Protection Regulation, on the
              25th of May 2018.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">TAXES</span>
          <ol>
            <li>
              It is User’s sole responsibility to determine whether, and to what
              extent, any Taxes apply to any transactions User conducts through
              the Apps and Website or are associated with the Services, and to
              withhold, collect, report and remit the correct amounts of Taxes
              to the appropriate tax authorities. Your transaction history is
              available through the Apps. The fees collected by Change do not
              include any Taxes.
            </li>
          </ol>
        </li>
        <li class="title">
          <span class="bold">MISCELLANEOUS</span>
          <ol>
            <li>
              Change may unilaterally amend these Terms without providing any
              advance notice or justification thereto. Any amendments to the
              Terms shall take effect as of uploading them to the Website and
              making of them accessible in the Apps.
            </li>
            <li>
              A failure of Change to exercise or enforce any right or provision
              of these Terms will not constitute a waiver of that right or
              provision.
            </li>
            <li>
              If any part of these Terms is held to be invalid or unenforceable,
              such determination shall not invalidate any other provision of
              these Terms.
            </li>
            <li>
              Change may assign these Terms (either collectively or each right
              and/or obligation separately, as decided by Change) to its parent
              company, affiliate or subsidiary without the consent of the Users.
              The Users may not assign any rights or obligations they have under
              these Terms without the prior written approval of Change.
            </li>
            <li>
              These Terms are governed by Estonian law. Any dispute, controversy
              or claim arising out of or in connection with these Terms, or the
              breach, termination or invalidity hereof, which the Parties have
              failed to solve by negotiations will be settled in Harju County
              Court as the court of first instance.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Container>
);

export default TermsAndConditionsText;
