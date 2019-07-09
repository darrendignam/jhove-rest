package org.openpreservation.jhove.rest.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.openpreservation.rest.environment.Environment;
import org.openpreservation.rest.environment.Environments;

/**
 * @author <a href="mailto:carl@openpreservation.org">Carl Wilson</a>
 *         <a href="https://github.com/carlwilson">carlwilson AT github</a>
 *
 * @version 0.1
 */
@Path("/api")
public final class ApiResource {

	/**
	 * 
	 */
	public ApiResource() {
		super();
	}

	@GET
	@Path("/info")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public static Environment getEnvironent() {
		return Environments.getEnvironment();
	}

	/**
	 * @return a new {@link ByteStreamResource}
	 */
	@Path("/bytes/")
	public static ByteStreamResource byteResources() {
		return new ByteStreamResource();
	}

	/**
	 * @return a new {@link ByteStreamResource}
	 */
	@Path("/jhove/")
	public static JhoveResources jhoveResources() {
		return new JhoveResources();
	}
}
