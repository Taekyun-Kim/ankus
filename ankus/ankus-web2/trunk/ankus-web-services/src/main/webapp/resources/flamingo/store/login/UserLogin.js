/*
 * Copyright (C) 2011  Flamingo Project (http://www.opencloudengine.org).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Flamingo.store.login.UserLogin', {
    extend: 'Ext.data.Store',
    alias: 'store.userLogin',

    autoLoad: true,

    fields: ['username', 'password'],

    /**
     * @override
     */
    constructor: function (config) {
        this.proxy = Ext.create('Ext.data.proxy.Ajax', {
            url: CONSTANTS.CONTEXT_PATH + CONSTANTS.USER_AUTHENTICATION,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8;'
            },
            reader: {
                type: 'json',
                root: 'list',
                totalProperty: 'total',
                idProperty: 'id'
            }
        });

        this.callParent(arguments);
    }
});
