package org.openpreservation.jhove.rest.exceptions;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;

public class IllegalStateExceptionMapper implements ExceptionMapper<IllegalStateException> {

	public IllegalStateExceptionMapper() {
		super();
	}

	@Override
	public Response toResponse(IllegalStateException exception) {
		return Response.status(Status.INTERNAL_SERVER_ERROR).header("X-JHOVE-INIT", "false")
				.entity(exception.getMessage()).type(MediaType.APPLICATION_JSON_TYPE).build();
	}

}
