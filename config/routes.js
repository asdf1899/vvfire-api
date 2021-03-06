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
  'POST /api/v1/vigile/login': { action: 'vigile/login' },
  // DISPONIBILITA
  'POST /api/v1/disponibilita/create': { action: 'disponibilita/create' },
  'POST /api/v1/disponibilita/show': { action: 'disponibilita/show' },
  // RICERCA PERSONA
  'POST /api/v1/ricercapersona/show': { action: 'ricercapersona/show' },
  'POST /api/v1/ricercapersona/create': { action: 'ricercapersona/create' },
  'PATCH /api/v1/ricercapersona/update': { action: 'ricercapersona/update' },
  'DELETE /api/v1/ricercapersona/delete': { action: 'ricercapersona/delete' },
  'POST /api/v1/ricercapersona/find-by-id': { action: 'ricercapersona/find-by-id' },
  'PATCH /api/v1/ricercapersona/complete': { action: 'ricercapersona/complete' },
  // POSIZIONI
  'POST /api/v1/posizioni/create': { action: 'posizioni/create' },
  'POST /api/v1/posizioni/get-latest-unique-positions': { action: 'posizioni/get-latest-unique-positions' },
  'POST /api/v1/posizioni/get-vigili-by-missione': { action: 'posizioni/get-vigili-by-missione' },
  'POST /api/v1/posizioni/get-posizioni-by-missione': { action: 'posizioni/get-posizioni-by-missione' },
  // MISSIONE
  'POST /api/v1/missione/create': { action: 'missione/create' },
  'POST /api/v1/missione/get-missioni-by-ricerca': { action: 'missione/get-missioni-by-ricerca' },
  'POST /api/v1/missione/get-riepilogo-missione': { action: 'missione/get-riepilogo-missione' },
  'POST /api/v1/missione/find-by-id': { action: 'missione/find-by-id' },
  'PATCH /api/v1/missione/update': { action: 'missione/update' },
  'PATCH /api/v1/missione/complete': { action: 'missione/complete' },
  'DELETE /api/v1/missione/delete': { action: 'missione/delete' },
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
