import React, { type ReactNode } from "react";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import type { WrapperProps } from "@docusaurus/types";
import CopyPageButton from "@site/src/components/CopyPageButton";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  return (
    <>
      <div className={styles.docItemActions}>
        <CopyPageButton />
      </div>
      <Content {...props} />
    </>
  );
}
