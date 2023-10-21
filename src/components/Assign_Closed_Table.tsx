import React from "react";

type ClosedAssignTableTypes = {
    category?: string,
    product?: string,
    type?: string,
    details?: string,
    comment?: string,
    smartScript?: string,
    closeORassign?: string,
};

export default function AssignClosedTable({ category, product, type, details, comment, smartScript, closeORassign }: ClosedAssignTableTypes) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Product</th>
                    <th>Type</th>
                    <th>details</th>
                    <th>comment</th>
                    <th>Smart Script</th>
                    <th>Closed | Assign</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{category}</td>
                    <td>{product}</td>
                    <td>{type}</td>
                    <td>{details}</td>
                    <td>{comment}</td>
                    <td>{smartScript}</td>
                    <td>{closeORassign}</td>
                </tr>
            </tbody>
        </table>
    );
}
