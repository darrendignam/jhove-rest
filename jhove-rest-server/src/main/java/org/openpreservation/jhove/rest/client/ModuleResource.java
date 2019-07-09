/**
 * 
 */
package org.openpreservation.jhove.rest.client;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.openpreservation.jhove.rest.client.views.ModulesView;

/**
 * @author cfw
 *
 */
@Produces({ MediaType.TEXT_HTML })
@Path("/modules")
public final class ModuleResource {

	/**
	 * 
	 */
	public ModuleResource() {
		super();
	}

	@GET
	public ModulesView getApp() {
		return new ModulesView();
	}
}
