import Layout from "components/layout/Layout";
import SoulManage from "components/soul/SoulManage";
import { DataContext } from "contexts/data";
import { useContext } from "react";

/**
 * Page where account can edit soul.
 */
export default function SoulEdit() {
  const { accountSoul } = useContext(DataContext);

  return (
    <Layout title="MentorDAO — Edit Soul">
      <SoulManage soul={accountSoul} />
    </Layout>
  );
}
