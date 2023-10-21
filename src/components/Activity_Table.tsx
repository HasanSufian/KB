import React from "react";

type ActivityTableTypes = {
    type?: string,
    subtype?: string,
    details?: string,
    conclusion?: string,
    status?: string,
};

export default function ActivityTable({ type, subtype, details, conclusion, status }: ActivityTableTypes) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>SubType</th>
                    <th>Details</th>
                    <th>Conclusion</th>
                    <th>Caller ID</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{type}</td>
                    <td>{subtype}</td>
                    <td>{details}</td>
                    <td>{conclusion}</td>
                    <td>{status}</td>
                </tr>
            </tbody>
        </table>
    );
}
