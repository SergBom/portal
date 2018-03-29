/*
 * File: app/view/PortalMenu.js
 * Date: Tue Oct 11 2016 11:41:05 GMT+0200 (RTZ 1 (зима))
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Portal.view.PortalMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portalmenu',

    requires: [
        'Portal.view.PortalMenuViewModel',
        'Portal.view.PortalMenuViewController'
    ],

    controller: 'portalmenu',
    viewModel: {
        type: 'menu'
    },
    stateId: 'PortalMenu',
    stateful: true,
    height: 432,
    width: 251,
    layout: 'accordion',

    listeners: {
        render: 'onPanelRender'
    }

});