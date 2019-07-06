/**
 * 
 */
package org.openpreservation.jhove.modules;

import java.util.Collections;
import java.util.Date;
import java.util.List;

import edu.harvard.hul.ois.jhove.Checksum;
import edu.harvard.hul.ois.jhove.Message;
import edu.harvard.hul.ois.jhove.RepInfo;

/**
 * @author cfw
 *
 */
public final class ValidationReport {
	public final List<Checksum> checksums;
	public final Date created;
	public final Date lastMod;
	public final String mimeType;
	public final String format;
	public final List<Message> messages;
	public final List<String> sigMatches;
	public final long size;
	public final int valid;
	public final int wellFormed;
	public final String validMessage;
	public final String wellFormedMessage;

	public ValidationReport(RepInfo repInfo) {
		this.checksums = repInfo.getChecksum();
		this.created = repInfo.getCreated();
		this.lastMod = repInfo.getLastModified();
		this.mimeType = repInfo.getMimeType();
		this.format = repInfo.getFormat();
		this.messages = Collections.unmodifiableList(repInfo.getMessage());
		this.sigMatches = Collections.unmodifiableList(repInfo.getSigMatch());
		this.size = repInfo.getSize();
		this.valid = repInfo.getValid();
		this.validMessage = (this.valid > 0) ? "Valid" : (this.valid < 0) ? "Undetermined" : "Not Valid";
		this.wellFormed = repInfo.getWellFormed();
		this.wellFormedMessage = (this.wellFormed > 0) ? "Well Formed"
				: (this.wellFormed < 0) ? "Undetermined" : "Not Well Formed";
	}
}
