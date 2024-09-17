export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td>
            </tr>

            <br />
            <tr>
                <td align="left" valign="top">
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                    </select>
                </td>
            </tr>

            <br />
            <tr>
                <td align="left" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                        <option>Percentage</option>
                        <option>Whole Number</option>
                        <option>Fractional Number</option>
                    </select>
                </td>
            </tr>

            <br />
            <tr>
                <td align="left" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                        <option>Online</option>
                        <option>Paper</option>
                        <option>Mail</option>
                    </select>
                </td>
            </tr>
        </table>

        <br />
        <label>Online Entry Options</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-text-entry"/>
        <label htmlFor="wd-text-entry">Text Entry</label>
        <br/>
        <input type="checkbox" name="check-genre" id="wd-website-url"/>
        <label htmlFor="wd-website-url">Website URL</label>
        <br/>
        <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
        <label htmlFor="wd-media-recordings">Media Recordings</label>
        <br/>
        <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
        <label htmlFor="wd-student-annotation">Student Annotation</label>
        <br/>
        <input type="checkbox" name="check-genre" id="wd-file-upload"/>
        <label htmlFor="wd-file-upload">File Uploads</label>

        <br/>
        <br/>
        <label htmlFor="wd-assign-to">Assign to </label>
        <br/>
        <input id="wd-assign-to" value="Everyone"/>

        <br/>
        <br/>
        <label htmlFor="wd-due-date">Due </label>
        <br/>
        <input id="wd-due-date" type="date"/>

        <br/>
        <br/>
        <label htmlFor="wd-available-form">Availble from </label>        
        <input id="wd-available-from" type="date"/>

        <br/>
        <br/>
        <label htmlFor="wd-file-upload">Until </label>
        <input id="wd-file-upload" type="date"/>

        <br/>
        <br/>
        <button>Cancel</button>
        <button>Save</button>

    </div>
);}