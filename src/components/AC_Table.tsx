import React from "react";


type ClosedAssignTableTypes = {
    isClosed: boolean,
    category?: 'Request' | 'Complain',
    type?: string,
    details?: string,
    comment?: string,
    smartScript?: string,
    sla?: string ,
    closureReason?: string,
};



export default function AssignClosedTable({ category, type, details, comment, smartScript, sla, closureReason, isClosed }: ClosedAssignTableTypes) {
    return (
        <table>
            <thead>
                {
                    isClosed ?
                        <tr>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Details</th>
                            <th>Closure reason</th>
                            <th>Status</th>
                        </tr>
                        :
                        <tr>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Details</th>
                            <th>Comment</th>
                            <th>Smart Script</th>
                            <th>SLA</th>
                        </tr>
                }
            </thead>
            <tbody>
                {
                    isClosed ?
                        <tr>
                            <th>{category}</th>
                            <th>{type}</th>
                            <th>{details}</th>
                            <th>{closureReason}</th>
                            <th>Closed</th>
                        </tr>
                        :
                        <tr>
                            <td>{category}</td>
                            <td>{type}</td>
                            <td>{details}</td>
                            <td>{comment}</td>
                            <td>{smartScript}</td>
                            <td>{sla}</td>
                        </tr>
                }
            </tbody>
        </table>
    );
}
