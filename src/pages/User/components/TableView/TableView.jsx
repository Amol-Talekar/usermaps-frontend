import React from "react";
import * as Styles from "./style";

const TableView = (props) => {
  const { userDetails } = props;
  const { userlocations } = userDetails;
  return (
    <Styles.TableContainer>
      <Styles.Table>
        <Styles.TableHead>
          <Styles.TableRow>
            <Styles.TableHeaderCell>Place Name</Styles.TableHeaderCell>
            <Styles.TableHeaderCell>Description</Styles.TableHeaderCell>
            <Styles.TableHeaderCell>Latitude</Styles.TableHeaderCell>
            <Styles.TableHeaderCell>Longitude</Styles.TableHeaderCell>
          </Styles.TableRow>
        </Styles.TableHead>
        <Styles.TableBody>
          {userlocations?.map((item) => (
            <Styles.TableRow key={item?._id}>
              <Styles.TableCell>{item?.placename}</Styles.TableCell>
              <Styles.TableCell>{item?.description}</Styles.TableCell>
              <Styles.TableCell>{item?.location?.lat}</Styles.TableCell>
              <Styles.TableCell>{item?.location?.lng}</Styles.TableCell>
            </Styles.TableRow>
          ))}
        </Styles.TableBody>
      </Styles.Table>
    </Styles.TableContainer>
  );
};

export default TableView;
