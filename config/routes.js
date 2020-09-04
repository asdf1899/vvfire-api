/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  // CORPO VVF
  'GET /api/v1/corpovvf/show': { action: 'corpovvf/show' },
  'POST /api/v1/corpovvf/create': { action: 'corpovvf/create' },
  'PATCH /api/v1/corpovvf/update': { action: 'corpovvf/update' },
  'DELETE /api/v1/corpovvf/delete': { action: 'corpovvf/delete' },
  'POST /api/v1/corpovvf/login': { action: 'corpovvf/login' },
  'POST /api/v1/corpovvf/find-by-email': { action: 'corpovvf/find-by-email' },
  // GRADO
  'GET /api/v1/grado/show': { action: 'grado/show' },
  'POST /api/v1/grado/create': { action: 'grado/create' },
  'PATCH /api/v1/grado/update': { action: 'grado/update' },
  'DELETE /api/v1/grado/delete': { action: 'grado/delete' },
  'POST /api/v1/grado/find-by-id': { action: 'grado/find-by-id' },
  // VIGILE
  'POST /api/v1/vigile/show': { action: 'vigile/show' },
  'POST /api/v1/vigile/create': { action: 'vigile/create' },
  'PATCH /api/v1/vigile/update': { action: 'vigile/update' },
  'DELETE /api/v1/vigile/delete': { action: 'vigile/delete' },
  'POST /api/v1/vigile/find-by-id': { action: 'vigile/find-by-id' },
  // DISPONIBILITA
  'POST /api/v1/disponibilita/create': { action: 'disponibilita/create' },
  'POST /api/v1/disponibilita/show': { action: 'disponibilita/show' },
  // RICERCA PERSONA
  'POST /api/v1/ricercapersona/show': { action: 'ricercapersona/show' },
  'POST /api/v1/ricercapersona/create': { action: 'ricercapersona/create' },
  'PATCH /api/v1/ricercapersona/update': { action: 'ricercapersona/update' },
  'DELETE /api/v1/ricercapersona/delete': { action: 'ricercapersona/delete' },
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
