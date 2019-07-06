package org.openpreservation.jhove.rest.exceptions;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

public class HttpJhoveExceptionMapper
		implements ExceptionMapper<HttpJhoveException> {

	public HttpJhoveExceptionMapper() {
		super();
	}

	@Override
	public Response toResponse(HttpJhoveException exception) {
		return Response.status(exception.code).entity(exception.getMessage())
				.type(MediaType.TEXT_PLAIN).build();
	}

}
