import React, { memo } from "react";
import { Table } from "reactstrap";
import { checkStrEmpty } from ".";

function CustomTable(props) {
  const { fields = [], data = [], hearderStyle } = props;
  return (
    <Table {...props} sm bordered>
      <thead style={hearderStyle ? hearderStyle : {}}>
        <tr>
          {fields.map((_item, _idx) => (
            <th key={_idx} className="text-center">
              {_item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(
          (item, idx) =>
            item && (
              <tr key={idx}>
                {fields.map((_item, _idx) => {
                  let val = item[_item.value] || "";
                  let value_alt =
                    (_item.value_alt && item[_item.value_alt]) || "";
                  let _className = _item.className ? _item.className : "";
                  if (_item.custom) {
                    return (
                      <>
                        <td className={_item.className}>
                          {_item.component(item, idx)}
                        </td>
                      </>
                    );
                  } else {
                    return (
                      <td key={_idx} className={_className}>
                        {checkStrEmpty(val) ? value_alt : val || "-"}
                      </td>
                    );
                  }
                })}
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
}

export default memo(CustomTable);
