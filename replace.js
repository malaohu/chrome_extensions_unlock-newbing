var __spreadArray = this && this.__spreadArray || function(n, t, i) {
    if (i || arguments.length === 2)
        for (var r = 0, f = t.length, u; r < f; r++)
            !u && r in t || (u || (u = Array.prototype.slice.call(t, 0, r)),
            u[r] = t[r]);
    return n.concat(u || Array.prototype.slice.call(t))
}
, SydFSCHelper;
(function(n) {
    function ur(i) {
        var ht, ct, lt, at, vt, yt, pt, wt, bt, gt, ni, ti, ii, ri, ui, fi, ei, li, ai, vi, yi, bi, ki, di, gi, tr, ir, rr, ur, ar, vr, pr, wr, br, kr, dr, gr, nu, tu, ru, uu, fu, eu, ou, su, hu, cu, lu, au, vu, yu, pu, wu, bu, ku, du, gu, nf, tf, rf, uf, ff, ef, sf, hf, cf, lf, af, vf, yf, pf, wf, bf, kf, df, gf, ne, te, ie, re, ue, fe, ee, oe, se, he, ce, le, ae, ve, ye, pe, we, be, ke, de, ge, no, to, io, ro, uo, fo, eo, oo, so, ho, co, lo, ao, vo, yo, po, wo, bo, ko, go, ns, ts, is, rs, us, fs, es, os, ss, hs, cs, ls, as, vs, ys, ps, ws, bs, ks, ds, gs, nh, th, ih, rh, uh, fh, eh, oh, sh, hh, ch, lh, ah, vh, yh, ph, wh, bh, kh, dh, gh, nc, tc, ic, rc, uc, fc, ec, oc, sc, hc, cc, lc, ac, vc, yc, pc, wc, bc, kc, dc, gc, nl, tl, il, rl, ul, fl, el, ol, sl, hl, cl, ll, al, vl, yl, pl, wl, bl, kl, dl, gl, na, ta, ia, ra, ua, fa, ea, oa, sa, ha, ca, la, aa, va, ya, pa, wa, ba, ka, da, ga, nv, lk, r, rv, w, o, l, k, d, e, g, uv, fv, tt, ev, f, ov, sv, s, hv, rt, cv, lv, it, ut, av, a, et, ak, v, st, vv, yv;
        i === void 0 && (i = null);
        n.isConfigSet = !0;
        _w["_sydConvConfig"].sydOptionSets += ",iycapbing,iyxapbing",
        _w["_sydConvConfig"].enableVisualSearch = true;
        
        var pv = t((ht = _w._sydConvConfig) === null || ht === void 0 ? void 0 : ht.country, !1)
          , wv = t((ct = _w._sydConvConfig) === null || ct === void 0 ? void 0 : ct.countryConfidence, !1)
          , bv = t((lt = _w._sydConvConfig) === null || lt === void 0 ? void 0 : lt.state, !1)
          , kv = t((at = _w._sydConvConfig) === null || at === void 0 ? void 0 : at.city, !1)
          , dv = t((vt = _w._sydConvConfig) === null || vt === void 0 ? void 0 : vt.cityConfidence, !1)
          , gv = t((yt = _w._sydConvConfig) === null || yt === void 0 ? void 0 : yt.zip, !1)
          , ny = t((pt = _w._sydConvConfig) === null || pt === void 0 ? void 0 : pt.timezoneoffset, !1)
          , yk = t((wt = _w._sydConvConfig) === null || wt === void 0 ? void 0 : wt.enableTimezoneOffsetFromJS, !1)
          , ty = t((bt = _w._sydConvConfig) === null || bt === void 0 ? void 0 : bt.dma, !1)
          , iy = t((gt = _w._sydConvConfig) === null || gt === void 0 ? void 0 : gt.lat, !1)
          , ry = t((ni = _w._sydConvConfig) === null || ni === void 0 ? void 0 : ni.long, !1)
          , pk = t((ti = _w._sydConvConfig) === null || ti === void 0 ? void 0 : ti.userIpAddress, "")
          , uy = t((ii = _w._sydConvConfig) === null || ii === void 0 ? void 0 : ii.noInitOpts, !1)
          , wk = t((ri = _w._sydConvConfig) === null || ri === void 0 ? void 0 : ri.overrideSydOptions, !1)
          , y = t((ui = _w._sydConvConfig) === null || ui === void 0 ? void 0 : ui.sydOptionSets, !1)
          , fy = t((fi = _w._sydConvConfig) === null || fi === void 0 ? void 0 : fi.voiceSrOptions, "")
          , ey = t((ei = _w._sydConvConfig) === null || ei === void 0 ? void 0 : ei.extraSappOptions, "")
          , oy = t((li = _w._sydConvConfig) === null || li === void 0 ? void 0 : li.extraEdgeOptions, "")
          , sy = t((ai = _w._sydConvConfig) === null || ai === void 0 ? void 0 : ai.sydUrlPart, !1)
          , bk = t((vi = _w._sydConvConfig) === null || vi === void 0 ? void 0 : vi.removeDeepleo, !1)
          , h = t((yi = _w._sydConvConfig) === null || yi === void 0 ? void 0 : yi.isSydCorpnet, !1)
          , kk = t((bi = _w._sydConvConfig) === null || bi === void 0 ? void 0 : bi.enableSydOverlay, !1)
          , dk = t((ki = _w._sydConvConfig) === null || ki === void 0 ? void 0 : ki.enableEdgeMobileNativeTTS, !1)
          , gk = t((di = _w._sydConvConfig) === null || di === void 0 ? void 0 : di.isVisualParityRun, !1)
          , nd = t((gi = _w._sydConvConfig) === null || gi === void 0 ? void 0 : gi.isMSAAuthenticated, !1)
          , td = t((tr = _w._sydConvConfig) === null || tr === void 0 ? void 0 : tr.userMailId, "")
          , hy = t((ir = _w._sydConvConfig) === null || ir === void 0 ? void 0 : ir.sydBaseUrl, !1)
          , p = t((rr = _w._sydConvConfig) === null || rr === void 0 ? void 0 : rr.isCompliantSydneyEndpointEnabled, !1)
          , id = t((ur = _w._sydConvConfig) === null || ur === void 0 ? void 0 : ur.isBingChatForEnterprise, !1)
          , cy = t((ar = _w._sydConvConfig) === null || ar === void 0 ? void 0 : ar.sydIDs, "")
          , ly = t((vr = _w._sydConvConfig) === null || vr === void 0 ? void 0 : vr.traceId, "")
          , ay = t(_w._sydConvTranslation, {})
          , rd = t((pr = _w._sydConvConfig) === null || pr === void 0 ? void 0 : pr.enableSydMic, !1)
          , ud = t((wr = _w._sydConvConfig) === null || wr === void 0 ? void 0 : wr.enableSydShare, !1)
          , fd = t((br = _w._sydConvConfig) === null || br === void 0 ? void 0 : br.addDv3Opt, !1)
          , ed = t((kr = _w._sydConvConfig) === null || kr === void 0 ? void 0 : kr.addGenContentv3Opt, !1)
          , od = t((dr = _w._sydConvConfig) === null || dr === void 0 ? void 0 : dr.enable161Feats, !0)
          , sd = t((gr = _w._sydConvConfig) === null || gr === void 0 ? void 0 : gr.enableAnsCardSuffix, !1)
          , hd = t((nu = _w._sydConvConfig) === null || nu === void 0 ? void 0 : nu.removeDSAT, !0)
          , vy = t((tu = _w._sydConvConfig) === null || tu === void 0 ? void 0 : tu.enableErrorTelemetry, !1)
          , yy = t((ru = _w._sydConvConfig) === null || ru === void 0 ? void 0 : ru.enableSpeechExperimentalFeatures, !1)
          , py = t((uu = _w._sydConvConfig) === null || uu === void 0 ? void 0 : uu.enableSpeechChatDataAfterPhrase, !1)
          , tv = t((fu = _w._sydConvConfig) === null || fu === void 0 ? void 0 : fu.enableSpeechEarconOnInput, !1)
          , wy = t((eu = _w._sydConvConfig) === null || eu === void 0 ? void 0 : eu.enableTTSOnSuggestionAfterVoice, !1)
          , by = t((ou = _w._sydConvConfig) === null || ou === void 0 ? void 0 : ou.enableSimpleVoiceInput, !1)
          , ky = t((su = _w._sydConvConfig) === null || su === void 0 ? void 0 : su.enableSpeechDictationMode, !1)
          , dy = t((hu = _w._sydConvConfig) === null || hu === void 0 ? void 0 : hu.enableAudioPreloadLimit, !1)
          , gy = t((cu = _w._sydConvConfig) === null || cu === void 0 ? void 0 : cu.enableSpeechFateTTSStop, !1)
          , np = t((lu = _w._sydConvConfig) === null || lu === void 0 ? void 0 : lu.enableSpeechGetUserMedia, !1)
          , cd = t((au = _w._sydConvConfig) === null || au === void 0 ? void 0 : au.enableSydCLOC, !1)
          , ld = t((vu = _w._sydConvConfig) === null || vu === void 0 ? void 0 : vu.enableCdxFeats, !1)
          , tp = t((yu = _w._sydConvConfig) === null || yu === void 0 ? void 0 : yu.cdxFeats, "")
          , ad = t((pu = _w._sydConvConfig) === null || pu === void 0 ? void 0 : pu.disableSecureUpdateConversation, !1)
          , vd = t((wu = _w._sydConvConfig) === null || wu === void 0 ? void 0 : wu.disableSecureSendFeedback, !1)
          , yd = t((bu = _w._sydConvConfig) === null || bu === void 0 ? void 0 : bu.enableFdbkFinalized, !1)
          , pd = t((ku = _w._sydConvConfig) === null || ku === void 0 ? void 0 : ku.enableSemSerpShare, !1)
          , wd = t((du = _w._sydConvConfig) === null || du === void 0 ? void 0 : du.enableCreatorShare, !1)
          , bd = t((gu = _w._sydConvConfig) === null || gu === void 0 ? void 0 : gu.enableShareModalDialog, !1)
          , kd = t((nf = _w._sydConvConfig) === null || nf === void 0 ? void 0 : nf.enableDM, !1)
          , ip = t((tf = _w._sydConvConfig) === null || tf === void 0 ? void 0 : tf.enableSydImageCreate, !1)
          , iv = t((rf = _w._sydConvConfig) === null || rf === void 0 ? void 0 : rf.enableVisualSearch, !1)
          , dd = t((uf = _w._sydConvConfig) === null || uf === void 0 ? void 0 : uf.removeCameraInputForVisualSearch, !1)
          , gd = t((ff = _w._sydConvConfig) === null || ff === void 0 ? void 0 : ff.enableVisualSubscriptionIdOverride, !1)
          , rp = t((ef = _w._sydConvConfig) === null || ef === void 0 ? void 0 : ef.visualSearchSubscriptionId, "")
          , ng = t((sf = _w._sydConvConfig) === null || sf === void 0 ? void 0 : sf.enableSecureConnect, !0)
          , tg = t((hf = _w._sydConvConfig) === null || hf === void 0 ? void 0 : hf.enableShortOpt, !1)
          , ig = t((cf = _w._sydConvConfig) === null || cf === void 0 ? void 0 : cf.enablePuidOvr, !1)
          , up = t((lf = _w._sydConvConfig) === null || lf === void 0 ? void 0 : lf.enablePerfTrk, !1)
          , rg = t((af = _w._sydConvConfig) === null || af === void 0 ? void 0 : af.enableEmbeddedPerf, !1)
          , fp = t((vf = _w._sydConvConfig) === null || vf === void 0 ? void 0 : vf.enableSinglePerfEventPerMessage, !1)
          , ep = t((yf = _w._sydConvConfig) === null || yf === void 0 ? void 0 : yf.enableUnauthRedir, !1)
          , op = t((pf = _w._sydConvConfig) === null || pf === void 0 ? void 0 : pf.enableActionBarV2, !1)
          , sp = t((wf = _w._sydConvConfig) === null || wf === void 0 ? void 0 : wf.enableSpeechDictationBridgeMode, !1)
          , hp = t((bf = _w._sydConvConfig) === null || bf === void 0 ? void 0 : bf.enableSpeechErrorHandling, !1)
          , cp = t((kf = _w._sydConvConfig) === null || kf === void 0 ? void 0 : kf.enableSpeechAriaLabel, !1)
          , lp = t((df = _w._sydConvConfig) === null || df === void 0 ? void 0 : df.enableSpeechReopenMic, !1)
          , ap = t((gf = _w._sydConvConfig) === null || gf === void 0 ? void 0 : gf.enableSpeechTTSLatencyLogging, !1)
          , vp = t((ne = _w._sydConvConfig) === null || ne === void 0 ? void 0 : ne.enableSpeechInputWhileRequestIsPending, !1)
          , yp = t((te = _w._sydConvConfig) === null || te === void 0 ? void 0 : te.enableSpeechIconDarkTheme, !1)
          , ug = t((ie = _w._sydConvConfig) === null || ie === void 0 ? void 0 : ie.enableNewTopicAutoExpand, !1)
          , fg = t((re = _w._sydConvConfig) === null || re === void 0 ? void 0 : re.enableMaxTurnsPerConversation, !1)
          , eg = t((ue = _w._sydConvConfig) === null || ue === void 0 ? void 0 : ue.enableAmberTurnPerConversation, !1)
          , og = t((fe = _w._sydConvConfig) === null || fe === void 0 ? void 0 : fe.maxMessageLength, ci)
          , sg = t((ee = _w._sydConvConfig) === null || ee === void 0 ? void 0 : ee.isAccountLinkedWithActiveAAD, !1)
          , hg = t((oe = _w._sydConvConfig) === null || oe === void 0 ? void 0 : oe.enableThreadsAADMSASwitch, !1)
          , pp = t((se = _w._sydConvConfig) === null || se === void 0 ? void 0 : se.enableTelemetryPrivacy, !1)
          , cg = t((he = _w._sydConvConfig) === null || he === void 0 ? void 0 : he.enableSydSafeSearch, !1)
          , lg = t((ce = _w._sydConvConfig) === null || ce === void 0 ? void 0 : ce.enableFeedbackClientSideScreenshot, !1)
          , ag = t((le = _w._sydConvConfig) === null || le === void 0 ? void 0 : le.syntheticStreamSpeed, pi)
          , vg = t((ae = _w._sydConvConfig) === null || ae === void 0 ? void 0 : ae.enableTypingIndicatorAnimation, !1)
          , yg = t((ve = _w._sydConvConfig) === null || ve === void 0 ? void 0 : ve.typingIndicatorAnimationDuration, wi)
          , pg = t((ye = _w._sydConvConfig) === null || ye === void 0 ? void 0 : ye.disableShareWithNoMargin, !1)
          , wg = t((pe = _w._sydConvConfig) === null || pe === void 0 ? void 0 : pe.enableMobileShareAnchorBottom, !1)
          , bg = t((we = _w._sydConvConfig) === null || we === void 0 ? void 0 : we.enableCreativeLandingPage, !1)
          , kg = t((be = _w._sydConvConfig) === null || be === void 0 ? void 0 : be.enableServerLogMerging, !1)
          , wp = t((ke = _w._sydConvConfig) === null || ke === void 0 ? void 0 : ke.enableOneClickCopy, !1)
          , bp = t((de = _w._sydConvConfig) === null || de === void 0 ? void 0 : de.enableReorderCopiedTextReferences, !1)
          , kp = t((ge = _w._sydConvConfig) === null || ge === void 0 ? void 0 : ge.enableCodeCopy, !1)
          , dp = t((no = _w._sydConvConfig) === null || no === void 0 ? void 0 : no.enableCodeBar, !1)
          , gp = t((to = _w._sydConvConfig) === null || to === void 0 ? void 0 : to.enableUserMessageCopy, !1)
          , nw = t((io = _w._sydConvConfig) === null || io === void 0 ? void 0 : io.enableRichTextPaste, !1)
          , tw = t((ro = _w._sydConvConfig) === null || ro === void 0 ? void 0 : ro.enablePasteMarkdownTable, !1)
          , iw = t((uo = _w._sydConvConfig) === null || uo === void 0 ? void 0 : uo.enablePasteMath, !1)
          , dg = t((fo = _w._sydConvConfig) === null || fo === void 0 ? void 0 : fo.enableSkipContentOriginCheck, !1)
          , gg = t((eo = _w._sydConvConfig) === null || eo === void 0 ? void 0 : eo.enableMobileOneClickShare, !1)
          , nn = t((oo = _w._sydConvConfig) === null || oo === void 0 ? void 0 : oo.enableMobileOneClickShareV2, !1)
          , tn = t((so = _w._sydConvConfig) === null || so === void 0 ? void 0 : so.enableFeedbackInstrumentation, !1)
          , rn = t((ho = _w._sydConvConfig) === null || ho === void 0 ? void 0 : ho.enableSuggEndFix, !1)
          , un = t((co = _w._sydConvConfig) === null || co === void 0 ? void 0 : co.enableAutoRecoverFromInvalidSession, !1)
          , fn = t((lo = _w._sydConvConfig) === null || lo === void 0 ? void 0 : lo.enableAutoRecoverFromInvalidSessionForFirstTurn, !1)
          , en = t((ao = _w._sydConvConfig) === null || ao === void 0 ? void 0 : ao.enableActionBarIMEFix, !1)
          , on = t((vo = _w._sydConvConfig) === null || vo === void 0 ? void 0 : vo.enableGhostTrailingSpaceByLanguage, !1)
          , rw = t((yo = _w._sydConvConfig) === null || yo === void 0 ? void 0 : yo.enableInlineFeedback, !1)
          , uw = t((po = _w._sydConvConfig) === null || po === void 0 ? void 0 : po.enableInlineFeedbackV2, !1)
          , fw = t((wo = _w._sydConvConfig) === null || wo === void 0 ? void 0 : wo.enableInlineFeedbackV21, !1)
          , ew = t((bo = _w._sydConvConfig) === null || bo === void 0 ? void 0 : bo.enableSerpFeedback, !1)
          , ow = t((ko = _w._sydConvConfig) === null || ko === void 0 ? void 0 : ko.enableMessageExport, !1)
          , sw = t((go = _w._sydConvConfig) === null || go === void 0 ? void 0 : go.enableMessageExportWithPlainText, !1)
          , hw = t((ns = _w._sydConvConfig) === null || ns === void 0 ? void 0 : ns.enableMessageExportOnlineWord, !1)
          , cw = t((ts = _w._sydConvConfig) === null || ts === void 0 ? void 0 : ts.enableMessageExportOnlineExcel, !1)
          , lw = t((is = _w._sydConvConfig) === null || is === void 0 ? void 0 : is.enableThreadExportOnlineWord, !1)
          , aw = t((rs = _w._sydConvConfig) === null || rs === void 0 ? void 0 : rs.enableMessageExportV2, !1)
          , vw = t((us = _w._sydConvConfig) === null || us === void 0 ? void 0 : us.enableShorterToastDuration, !1)
          , yw = t((fs = _w._sydConvConfig) === null || fs === void 0 ? void 0 : fs.enableDirectlyOpenExportOnlineLink, !1)
          , pw = t((es = _w._sydConvConfig) === null || es === void 0 ? void 0 : es.enableLoginHintForSSO, !1)
          , ww = t((os = _w._sydConvConfig) === null || os === void 0 ? void 0 : os.enableLimitToMsaOnlineExport, !1)
          , bw = t((ss = _w._sydConvConfig) === null || ss === void 0 ? void 0 : ss.enableMSAuth1stPartyApp, !1)
          , kw = t((hs = _w._sydConvConfig) === null || hs === void 0 ? void 0 : hs.enableAdsRedirectLinkForTextMessage, !1)
          , dw = t((cs = _w._sydConvConfig) === null || cs === void 0 ? void 0 : cs.enableCopyHtml, !1)
          , gw = t((ls = _w._sydConvConfig) === null || ls === void 0 ? void 0 : ls.enableExportPdfWithAnswerScreenshot, !1)
          , nb = t((as = _w._sydConvConfig) === null || as === void 0 ? void 0 : as.enableExportDocxWithAnswerScreenshot, !1)
          , tb = t((vs = _w._sydConvConfig) === null || vs === void 0 ? void 0 : vs.enableLibrariesSplitImport, !1)
          , ib = t((ys = _w._sydConvConfig) === null || ys === void 0 ? void 0 : ys.enableFlatActionBar, !1)
          , rb = t((ps = _w._sydConvConfig) === null || ps === void 0 ? void 0 : ps.codexMUIDUser, !1)
          , ub = t((ws = _w._sydConvConfig) === null || ws === void 0 ? void 0 : ws.enableFixCodeXAsBug, !1)
          , fb = t((bs = _w._sydConvConfig) === null || bs === void 0 ? void 0 : bs.enableChatIconClickable, !1)
          , eb = t((ks = _w._sydConvConfig) === null || ks === void 0 ? void 0 : ks.enableShareQuestionWithResponse, !1)
          , ob = t((ds = _w._sydConvConfig) === null || ds === void 0 ? void 0 : ds.enableShareQuestionTitlePrefix, !1)
          , sb = t((gs = _w._sydConvConfig) === null || gs === void 0 ? void 0 : gs.enableShareInlineAdsIframe, !1)
          , hb = t((nh = _w._sydConvConfig) === null || nh === void 0 ? void 0 : nh.enableScreenshotIgnoreOnCibSerp, !1)
          , cb = t((th = _w._sydConvConfig) === null || th === void 0 ? void 0 : th.enableStandaloneUtility, !1);
        n.enableCreatorSendQueryWhenShowConvQuery = t((ih = _w._sydConvConfig) === null || ih === void 0 ? void 0 : ih.enableCreatorSendQueryWhenShowConvQuery, !0);
        n.padding2TMobile = t((rh = _w._sydConvConfig) === null || rh === void 0 ? void 0 : rh.padding2TMobile, !0);
        var sn = t((uh = _w._sydConvConfig) === null || uh === void 0 ? void 0 : uh.enableCodexWin, !1)
          , hn = t((fh = _w._sydConvConfig) === null || fh === void 0 ? void 0 : fh.enableCodexWinBotMessage, !1)
          , cn = t((eh = _w._sydConvConfig) === null || eh === void 0 ? void 0 : eh.codexWinCurrentTurn, 0)
          , ln = t((oh = _w._sydConvConfig) === null || oh === void 0 ? void 0 : oh.enableGetChats, !1)
          , lb = t((sh = _w._sydConvConfig) === null || sh === void 0 ? void 0 : sh.enableNewTables, !1)
          , an = t((hh = _w._sydConvConfig) === null || hh === void 0 ? void 0 : hh.codexTableVersion, 1)
          , ab = t((ch = _w._sydConvConfig) === null || ch === void 0 ? void 0 : ch.enableBufferMessage, !1)
          , vb = t((lh = _w._sydConvConfig) === null || lh === void 0 ? void 0 : lh.enableBufferDots, !1)
          , yb = t((ah = _w._sydConvConfig) === null || ah === void 0 ? void 0 : ah.enableOptimizedStreaming, !1)
          , vn = t((vh = _w._sydConvConfig) === null || vh === void 0 ? void 0 : vh.enableExportDocxWithFormat, !1)
          , yn = t((yh = _w._sydConvConfig) === null || yh === void 0 ? void 0 : yh.enableDisposeOrphanedHosts, !1)
          , pn = t((ph = _w._sydConvConfig) === null || ph === void 0 ? void 0 : ph.enablePreserveTextFormat, !1)
          , wn = t((wh = _w._sydConvConfig) === null || wh === void 0 ? void 0 : wh.enableHoverCardOnLearnMorePills, !1)
          , bn = t((bh = _w._sydConvConfig) === null || bh === void 0 ? void 0 : bh.enableWowCDSSurvey, !1)
          , pb = t((kh = _w._sydConvConfig) === null || kh === void 0 ? void 0 : kh.enableSydBeacon, !1)
          , kn = t((dh = _w._sydConvConfig) === null || dh === void 0 ? void 0 : dh.enableShareOnHostMessage, !1)
          , dn = t((gh = _w._sydConvConfig) === null || gh === void 0 ? void 0 : gh.disablePassBotGreetingInContext, !1)
          , wb = t((nc = _w._sydConvConfig) === null || nc === void 0 ? void 0 : nc.enableThreadContextMenu, !1)
          , gn = t((tc = _w._sydConvConfig) === null || tc === void 0 ? void 0 : tc.enableCloudflareCaptcha, !1)
          , ntt = t((ic = _w._sydConvConfig) === null || ic === void 0 ? void 0 : ic.enableInvisibleCaptchaChallenge, !1)
          , ttt = t((rc = _w._sydConvConfig) === null || rc === void 0 ? void 0 : rc.enableResizeObserverWithAnimationFrame, !1)
          , itt = t((uc = _w._sydConvConfig) === null || uc === void 0 ? void 0 : uc.enableKnowledgeCardImage, !1)
          , bb = t((fc = _w._sydConvConfig) === null || fc === void 0 ? void 0 : fc.enableStartPromotion, !1)
          , rtt = t((ec = _w._sydConvConfig) === null || ec === void 0 ? void 0 : ec.enableCopyButtonInstrumented, !1)
          , utt = t((oc = _w._sydConvConfig) === null || oc === void 0 ? void 0 : oc.enableThreadSync, !1)
          , ftt = t((sc = _w._sydConvConfig) === null || sc === void 0 ? void 0 : sc.enableMobileKnowledgeCardOverlay, !1)
          , kb = t((hc = _w._sydConvConfig) === null || hc === void 0 ? void 0 : hc.enableFlux3P, !1)
          , ett = t((cc = _w._sydConvConfig) === null || cc === void 0 ? void 0 : cc.enablePluginsByTone, !1)
          , ott = t((lc = _w._sydConvConfig) === null || lc === void 0 ? void 0 : lc.enableCodexTesthooks, !1)
          , stt = t((ac = _w._sydConvConfig) === null || ac === void 0 ? void 0 : ac.enableTestTurnLimit, !1)
          , htt = t((vc = _w._sydConvConfig) === null || vc === void 0 ? void 0 : vc.enableTestDailyLimit, !1)
          , db = t((yc = _w._sydConvConfig) === null || yc === void 0 ? void 0 : yc.flux3PPluginList, "")
          , dit = t((pc = _w._sydConvConfig) === null || pc === void 0 ? void 0 : pc.enableTestCodexTurnLimit, !1)
          , git = t((wc = _w._sydConvConfig) === null || wc === void 0 ? void 0 : wc.enableTestCodexDailylimit, !1)
          , gb = t((bc = _w._sydConvConfig) === null || bc === void 0 ? void 0 : bc.disableWelcomeScreen, !1)
          , ctt = t((kc = _w._sydConvConfig) === null || kc === void 0 ? void 0 : kc.enableWelcomeScreenV2, !1)
          , ltt = t((dc = _w._sydConvConfig) === null || dc === void 0 ? void 0 : dc.enableChatFRE, !1)
          , nk = t((gc = _w._sydConvConfig) === null || gc === void 0 ? void 0 : gc.enableWebPageContextMessages, !1)
          , att = t((nl = _w._sydConvConfig) === null || nl === void 0 ? void 0 : nl.enableCodexPluginb, !1)
          , vtt = t((tl = _w._sydConvConfig) === null || tl === void 0 ? void 0 : tl.enableNewAutoSuggestEndPoint, !1)
          , ytt = t((il = _w._sydConvConfig) === null || il === void 0 ? void 0 : il.enable2TQueryConfigsOnSerpLoad, !1)
          , tk = t((rl = _w._sydConvConfig) === null || rl === void 0 ? void 0 : rl.enableSydStaticAdsLink, !1)
          , ptt = t((ul = _w._sydConvConfig) === null || ul === void 0 ? void 0 : ul.isMobileHost, !1)
          , wtt = t((fl = _w._sydConvConfig) === null || fl === void 0 ? void 0 : fl.enableRenderCardRequestIMSearchParams, !1)
          , ik = t((el = _w._sydConvConfig) === null || el === void 0 ? void 0 : el.enableMessagePrivacy, !1)
          , rk = t((ol = _w._sydConvConfig) === null || ol === void 0 ? void 0 : ol.enableCloseShareOnClickOutside, !1)
          , btt = t((sl = _w._sydConvConfig) === null || sl === void 0 ? void 0 : sl.enableTypingIndicatorForSerpSlotCreator, !0)
          , ktt = t((hl = _w._sydConvConfig) === null || hl === void 0 ? void 0 : hl.enableOnProcessingStartEvent, !1)
          , dtt = t((cl = _w._sydConvConfig) === null || cl === void 0 ? void 0 : cl.enableOnProcessingCompleteEvent, !1)
          , uk = t((ll = _w._sydConvConfig) === null || ll === void 0 ? void 0 : ll.enableUpdateProfile, !1)
          , gtt = t((al = _w._sydConvConfig) === null || al === void 0 ? void 0 : al.enableTypewriter, !1)
          , nit = t((vl = _w._sydConvConfig) === null || vl === void 0 ? void 0 : vl.enableConfirmPromptSingleDeleteThread, !1)
          , tit = !t((yl = _w._sydConvConfig) === null || yl === void 0 ? void 0 : yl.disableTooltip, !1);
        b = (pl = _w._sydConvConfig) === null || pl === void 0 ? void 0 : pl.convBackBtn;
        var iit = t((wl = _w._sydConvConfig) === null || wl === void 0 ? void 0 : wl.enableDeferredImageCreatorCard, !1)
          , rit = t((bl = _w._sydConvConfig) === null || bl === void 0 ? void 0 : bl.enableSaharaStream, !1)
          , uit = t((kl = _w._sydConvConfig) === null || kl === void 0 ? void 0 : kl.enableFaviconsV2, !1)
          , fit = t((dl = _w._sydConvConfig) === null || dl === void 0 ? void 0 : dl.enableFaviconsAutoRefresh, !1)
          , eit = t((gl = _w._sydConvConfig) === null || gl === void 0 ? void 0 : gl.enableUserIpAddress, !1)
          , oit = t((na = _w._sydConvConfig) === null || na === void 0 ? void 0 : na.enableSkipContentOriginValidation, !1)
          , sit = t((ta = _w._sydConvConfig) === null || ta === void 0 ? void 0 : ta.enableLooseMessageDensity, !1)
          , fk = t((ia = _w._sydConvConfig) === null || ia === void 0 ? void 0 : ia.enableSuggestionItemEnterAnimation, !1)
          , ek = t((ra = _w._sydConvConfig) === null || ra === void 0 ? void 0 : ra.enableKatexScroll, !1)
          , hit = t((ua = _w._sydConvConfig) === null || ua === void 0 ? void 0 : ua.enableLinkPreviewCarousel, !1)
          , cit = t((fa = _w._sydConvConfig) === null || fa === void 0 ? void 0 : fa.useFakeDataForLinkPreviewCarousel, !1)
          , ok = t((ea = _w._sydConvConfig) === null || ea === void 0 ? void 0 : ea.enablePageHeaderOverlapClamping, !1)
          , lit = t((oa = _w._sydConvConfig) === null || oa === void 0 ? void 0 : oa.enableThreadShowPlugins, !1)
          , ait = t((sa = _w._sydConvConfig) === null || sa === void 0 ? void 0 : sa.enableUpdateUserMessageId, !1)
          , vit = t((ha = _w._sydConvConfig) === null || ha === void 0 ? void 0 : ha.enablePluginPanelFre, !1)
          , yit = t((ca = _w._sydConvConfig) === null || ca === void 0 ? void 0 : ca.enablePersistentInputText, !1)
          , sk = t((la = _w._sydConvConfig) === null || la === void 0 ? void 0 : la.enableEmptyThreadTime, !1)
          , pit = t((aa = _w._sydConvConfig) === null || aa === void 0 ? void 0 : aa.enableRenderIframeCardRequest, !1)
          , hk = t((va = _w._sydConvConfig) === null || va === void 0 ? void 0 : va.enableBackendExportService, !1)
          , wit = t((ya = _w._sydConvConfig) === null || ya === void 0 ? void 0 : ya.enableFastChatLoadAnimation, !1)
          , bit = t((pa = _w._sydConvConfig) === null || pa === void 0 ? void 0 : pa.enableShareInThreadsHeader, !0)
          , ck = t((wa = _w._sydConvConfig) === null || wa === void 0 ? void 0 : wa.enableExternalSpeechIconAnimation, !1);
        if (sn && (sj_cook.set(n.userCook, nr, String(cn + 1), !0, "/", null),
        hn && (n.shouldForceSendBotGreeting = !0)),
        bn && (CIB.config.features.enableWowCDSSurvey = !0),
        sit && (CIB.config.messaging.messageDensity = "loose"),
        fk && (CIB.config.features.enableSuggestionItemEnterAnimation = fk),
        ek && (CIB.config.features.enableKatexScroll = ek),
        lk = _ge("cib-design-tokens"),
        lk || CIB.activateDesignTokens(),
        r = {},
        pv && (r.country = pv),
        bv && (r.state = bv),
        kv && (r.city = kv),
        gv && (r.zipcode = gv),
        yk || p ? r.timezoneoffset = -((new Date).getTimezoneOffset() / 60) : ny && (r.timezoneoffset = parseFloat(ny)),
        ty && (r.dma = ty),
        iy && (r.latitude = parseFloat(iy)),
        ry && (r.longitude = parseFloat(ry)),
        wv && (r.countryConfidence = wv),
        dv && (r.cityConfidence = dv),
        p)
            rv = Intl.DateTimeFormat().resolvedOptions().timeZone,
            rv && (r.timezone = rv),
            CIB.config.sydney.message.locationInfo = r;
        else if (i && typeof i.locations != "undefined" && typeof i.locations.locationsList != "undefined") {
            try {
                w = JSON.parse(i.locations.locationsList)
            } catch (nrt) {
                Log.Log("CI.Error", "Sydney", "Locations data not parsed correctly")
            }
            w && w.length > 0 && (CIB.config.sydney.message.locationHints = w)
        } else
            i && typeof i.cookLoc != "undefined" ? (o = [],
            i.cookLoc.userLoc && (l = ft(i.cookLoc.userLoc, !1),
            l.RegionType = 1,
            l.SourceType = 2,
            l.FDConfidence = 1,
            o.push(l)),
            i.cookLoc.deviceLoc && (k = ft(i.cookLoc.deviceLoc, !1),
            k.RegionType = 2,
            k.SourceType = 5,
            o.push(k)),
            cd && i.cookLoc.coarseLoc && (d = ft(i.cookLoc.coarseLoc, !1),
            d.RegionType = 2,
            d.SourceType = 11,
            o.push(d)),
            e = r,
            e.Center = {
                Latitude: e.latitude,
                Longitude: e.longitude
            },
            delete e.latitude,
            delete e.longitude,
            e.RegionType = 2,
            e.SourceType = 1,
            o.push(e),
            CIB.config.sydney.message.locationHints = o) : CIB.config.sydney.message.locationinfo = r;
        for (eit && (CIB.config.sydney.message.userIpAddress = pk),
        CIB.config.sydney.message.timestamp = iu(),
        g = 0,
        uv = Object.keys(ay); g < uv.length; g++)
            fv = uv[g],
            CIB.config.strings[fv] = ay[fv];
        if (ln && (CIB.config.features.enableGetChats = !0),
        utt && (CIB.config.features.enableThreadSync = !0),
        gtt && (CIB.config.features.enableTypewriterEffectForThreadName = !0),
        rit && (CIB.config.features.enableSaharaSyntheticStreaming = !0),
        uit && (CIB.config.features.enableFaviconV2 = !0),
        fit && (CIB.config.features.enableFaviconAutoRefresh = !0),
        kb && (CIB.config.features.enableFlux3P = !0,
        typeof CIB.config.plugin == "undefined" && (CIB.config.plugin = {}),
        db.length > 0 && (CIB.config.plugin.pluginList = JSON.parse(db))),
        ett && (CIB.config.features.enablePluginsByTone = !0),
        nit && (CIB.config.features.enableConfirmPromptForDeleteSingleThread = !0),
        iit && (CIB.config.features.enableDeferredImageCreatorCard = !0),
        att && (CIB.config.features.enableOpenTableBookBlueLink = !0),
        wtt && (CIB.config.features.enableRenderCardRequestIMSearchParams = !0),
        oit && (CIB.config.features.enableSkipContentOriginValidation = !0),
        hit && (CIB.config.features.enableLinkPreviewCarousel = !0),
        cit && (CIB.config.features.useFakeDataForLinkPreviewCarousel = !0),
        lit && (CIB.config.features.enableThreadShowPlugins = !0),
        ait && (CIB.config.features.enableUpdateUserMessageId = !0),
        vit && (CIB.config.features.enablePluginPanelFre = !0),
        pit && (CIB.config.features.enableRenderIframeCardRequest = !0),
        tt = new URLSearchParams(_w.location.search.toLowerCase()),
        ev = tt.get(oi.toLowerCase()),
        (uy || y != "" || h && ev || ey || oy) && (f = uy ? [] : CIB.config.sydney.request.optionsSets,
        f = c(f, y),
        h && (f = c(f, ev)),
        f = c(f, ey),
        f = c(f, oy),
        bk && (ov = f.indexOf("deepleo"),
        ov >= 0 && f.splice(ov, 1)),
        CIB.config.sydney.request.optionsSets = f),
        sv = tt.get(hi.toLowerCase()),
        (fy != "" || h && sv) && (s = CIB.config.speech.srOptions ? CIB.config.speech.srOptions : [],
        s = c(s, fy),
        h && (s = c(s, sv)),
        CIB.config.speech.srOptions = s),
        tv && (CIB.config.speech.srOptions || (CIB.config.speech.srOptions = []),
        CIB.config.speech.srOptions.push("earcon")),
        hd && (hv = CIB.config.sydney.request.optionsSets.indexOf("enable_debug_commands"),
        hv >= 0 && CIB.config.sydney.request.optionsSets.splice(hv, 1)),
        fd && u(CIB.config.sydney.request.optionsSets, "dv3sugg"),
        ed && u(CIB.config.sydney.request.optionsSets, "gencontentv3"),
        tg && u(CIB.config.sydney.request.optionsSets, "prodshortv4"),
        wk && y != "" && (CIB.config.sydney.request.optionsSets = c([], y)),
        ld) {
            if (tp)
                for (it = tp.split(","),
                rt = 0,
                cv = it; rt < cv.length; rt++)
                    a = cv[rt],
                    CIB.config.features[a] = !0;
            if (lv = tt.get(si.toLowerCase()),
            h && lv)
                for (it = lv.split(","),
                ut = 0,
                av = it; ut < av.length; ut++)
                    a = av[ut],
                    a.indexOf(":") >= 0 && (et = a.split(":"),
                    et.length == 2 && (CIB.config.features[et[0]] = et[1]))
        }
        if (cy && (ak = cy.split(","),
        CIB.config.sydney.request.sliceIds = ak),
        CIB.config.bing.isVisualParityRun = gk,
        CIB.config.bing.isMSAAuthenticated = nd,
        CIB.config.bing.userMailId = td,
        hy && (CIB.config.sydney.baseUrl = hy),
        sy != "" && (CIB.config.sydney.pathBase = sy),
        yy && (CIB.config.features.enableSpeechExperimental = yy),
        py && (CIB.config.features.enableSpeechChatDataAfterPhrase = py),
        tv && (CIB.config.features.enableSpeechEarconOnInput = tv),
        wy && (CIB.config.features.enableTTSOnSuggestionAfterVoice = wy),
        by && (CIB.config.features.enableSimpleVoiceInput = by),
        ky && (CIB.config.features.enableSpeechDictationMode = ky),
        dy && (CIB.config.features.enableAudioPreloadLimit = dy),
        gy && (CIB.config.features.enableSpeechFateTTSStop = gy),
        np && (CIB.config.features.enableSpeechGetUserMedia = np),
        hp && (CIB.config.features.enableSpeechErrorHandling = hp),
        ap && (CIB.config.features.enableSpeechTTSLatencyLogging = ap),
        vp && (CIB.config.features.enableSpeechInputWhileRequestIsPending = vp),
        yp && (CIB.config.features.enableSpeechIconDarkTheme = yp),
        cp && (CIB.config.features.enableSpeechAriaLabel = cp),
        lp && (CIB.config.features.enableSpeechReopenMic = lp),
        dk && (CIB.config.speech.textToSpeechProvider = SydneySuperAppConnector.getTextToSpeechProvider),
        ub && (CIB.config.features.enableFixCodeXAsBug = ub),
        fb && (CIB.config.features.enableChatIconClickable = fb),
        eb && (CIB.config.features.enableShareQuestionWithResponse = eb),
        ob && (CIB.config.features.enableShareQuestionTitlePrefix = ob),
        sb && (CIB.config.features.enableShareInlineAdsIframe = sb),
        hb && (CIB.config.features.enableScreenshotIgnoreOnCibSerp = hb),
        cb && (CIB.config.features.enableStandaloneUtility = cb),
        ck && (CIB.config.features.enableExternalSpeechIconAnimation = ck),
        kk && (CIB.config.features.enableMetaMessages = !1,
        CIB.config.features.enableLearnMore = !1,
        CIB.config.features.enableCitations = !1,
        CIB.config.features.enableWelcomeScreen = !1,
        CIB.config.features.enableShare = !1,
        CIB.config.features.enableStopButton = !1,
        CIB.config.features.enableAnswerCards = !1,
        CIB.config.features.enableAds = !1),
        ly && (CIB.config.sydney.request.traceId = ly),
        CIB.config.features.enableSpeechInput = rd,
        CIB.config.features.enableShare = ud,
        od && (CIB.config.features.enableErrorStateNotification = !0,
        CIB.config.features.enableErrorStateToastNotificationResetButton = !0,
        CIB.config.features.enableGhostedAutoSuggest = !0,
        CIB.config.features.enableHoverCardAttributionFavicons = !0),
        un && (CIB.config.features.enableAutoRecoverFromInvalidSession = !0),
        fn && (CIB.config.features.enableAutoRecoverFromInvalidSessionForFirstTurn = !0),
        en && (CIB.config.features.enableActionBarIMEFix = !0),
        on && (CIB.config.features.enableGhostTrailingSpaceByLanguage = !0),
        vy && (CIB.config.features.enableErrorInstrumentaton = vy),
        ip && (CIB.config.features.enableSydImageCreate = ip),
        iv && (dd && (CIB.config.features.enableCameraInputForVisualSerch = !1),
        CIB.config.features.enableVisualSearch = iv,
        CIB.config.visualSearch.includeCredentialInXHRRequest = !0,
        gd && !!rp && (CIB.config.visualSearch.subscriptionId = rp),
        er(),
        or()),
        sd && (CIB.config.features.enableAnsCardSfx = !0),
        vg && (CIB.config.features.enableTypingIndicatorAnimation = !0,
        CIB.config.messaging.typingIndicatorAnimationDuration = yg),
        lg && (CIB.config.features.enableFeedbackClientSideScreenshot = !0),
        rb && fr(),
        yn && (CIB.config.features.enableDisposeOrphanedHosts = !0),
        pn && (CIB.config.features.enablePreserveTextFormat = !0),
        wn && (CIB.config.features.enableHoverCardOnLearnMorePills = !0),
        gn && (CIB.config.features.enableCloudflareCaptcha = !0),
        ntt && (CIB.config.features.enableInvisibleCaptchaChallenge = !0),
        ttt && (CIB.config.features.enableResizeObserverWithAnimationFrame = !0),
        vn && (CIB.config.features.enableExportDocxWithFormat = !0),
        CIB.config.features.enableSecureUpdateConversation = !ad,
        CIB.config.features.enableSecureSendFeedback = !vd,
        CIB.config.features.enableShareSemSerp = pd,
        CIB.config.features.enableShareCreator = wd,
        CIB.config.features.enableFeedbackOnFinalized = yd,
        CIB.config.features.enableShareWithNoMargin = !pg,
        CIB.config.features.enableMobileShareAnchorBottom = wg,
        CIB.config.features.enableCreativeLandingPage = bg,
        CIB.config.features.enableServerLogMerging = kg,
        CIB.config.features.enableSkipContentOriginValidation = dg,
        CIB.config.features.enableMobileOneClickShare = gg,
        CIB.config.features.enableMobileOneClickShareV2 = nn,
        CIB.config.features.enableFeedbackInstrumentation = tn,
        CIB.config.features.enableCopyButtonInstrumented = rtt,
        CIB.config.features.enableShareModalDialog = bd,
        CIB.config.features.enableShareOnHostMessage = kn,
        CIB.config.features.enablePassBotGreetingInContext = !dn,
        CIB.config.features.enableMobileKnowledgeCardOverlay = ftt,
        CIB.config.features.enableNewAutoSuggestEndPoint = vtt,
        CIB.config.features.enableNewTopicTooltip = tit,
        CIB.config.features.enableTypingIndicatorForSerpSlotCreator = btt,
        CIB.config.features.enableOnProcessingStartEvent = ktt,
        CIB.config.features.enableOnProcessingCompleteEvent = dtt,
        CIB.config.messaging.maxMessageLength = og,
        ott && (CIB.config.testhooks.enableTestTurnLimit = stt,
        CIB.config.testhooks.enableTestDailyLimit = htt),
        CIB.config.features.enableThreadsAadMsaSwitch = hg,
        CIB.config.messaging.isAccountLinkedAadUser = sg,
        CIB.config.features.enableFastChatLoadAnimation = wit,
        CIB.config.features.enableShareInThreadsHeader = bit,
        (ctt || ltt) && (CIB.config.features.enableWelcomeScreen = gb,
        CIB.config.features.enableWelcomeScreenItem = !gb),
        itt && (iv || (CIB.config.features.enableKnowledgeCardImage = !0),
        CIB.config.features.enableImagesInTextMessages = !0),
        kd && CIB.changeColorScheme && CIB.changeColorScheme(1),
        CIB.config.features.secureConversation = ng,
        ug && (CIB.config.features.enableNewTopicAutoExpand = !0),
        eg && (CIB.config.features.enableAmberTurnPerConversation = !0,
        CIB.config.messaging.amberTurnPerConversation = t((ba = _w._sydConvConfig) === null || ba === void 0 ? void 0 : ba.amberTurnPerConversation, 0)),
        fg && (CIB.config.features.enableMaxTurnsPerConversation = !0,
        CIB.config.features.enableMaxTurnsFromBackend = t((ka = _w._sydConvConfig) === null || ka === void 0 ? void 0 : ka.enableMaxTurnsFromBackend, !1),
        CIB.config.messaging.maxTurnsPerConversation = rb ? t((da = _w._sydConvConfig) === null || da === void 0 ? void 0 : da.maxTurnsPerConversationMuidUser, nt) : t((ga = _w._sydConvConfig) === null || ga === void 0 ? void 0 : ga.maxTurnsPerConversation, nt)),
        ig && (CIB.config.sydney.request.Participant = {
            Id: "1"
        }),
        up && (CIB.config.features.enablePerfTracker = up),
        rg && (CIB.config.features.enableEmbeddedPerf = !0),
        fp && (CIB.config.features.enableSinglePerfEventPerMessage = fp),
        ep && (CIB.config.features.enableRedirectToLoginUrl = ep),
        op && (CIB.config.features.enableActionBarV2 = op),
        sp && (CIB.config.features.enableSpeechDictationBridgeMode = sp),
        cg && (CIB.config.features.enableSafeSearchSetting = !0,
        yr()),
        CIB.config.messaging.messageBufferWorkerStreamDelayMS = ag,
        rn && (CIB.config.suggestions.baseUrl = "https://www.bing.com"),
        wp && (CIB.config.features.enableOneClickCopy = wp),
        bp && (CIB.config.features.enableReorderCopiedTextReferences = bp),
        kp && (CIB.config.features.enableCodeCopy = kp),
        dp && (CIB.config.features.enableCodeBar = dp),
        gp && (CIB.config.features.enableUserMessageCopy = gp),
        nw && (CIB.config.features.enableRichTextPaste = nw),
        tw && (CIB.config.features.enablePasteMarkdownTable = tw),
        iw && (CIB.config.features.enablePasteMath = iw),
        rw && (CIB.config.features.enableInlineFeedback = rw),
        uw && (CIB.config.features.enableInlineFeedbackV2 = uw),
        fw && (CIB.config.features.enableInlineFeedbackV21 = fw),
        ew && (CIB.config.features.enableSerpFeedback = ew),
        ow && (CIB.config.features.enableMessageExport = ow),
        sw && (CIB.config.features.enableMessageExportWithPlainText = sw),
        hw && (CIB.config.features.enableMessageExportOnlineWord = hw),
        cw && (CIB.config.features.enableMessageExportOnlineExcel = cw),
        lw && (CIB.config.features.enableThreadExportOnlineWord = lw),
        aw && (CIB.config.features.enableMessageExportV2 = aw),
        vw && (CIB.config.features.enableShorterToastDuration = vw),
        yw && (CIB.config.features.enableDirectlyOpenExportOnlineLink = yw),
        pw && (CIB.config.features.enableLoginHintForSSO = pw),
        ww && (CIB.config.features.enableLimitToMsaOnlineExport = ww),
        bw && (CIB.config.features.enableMSAuth1stPartyApp = bw),
        kw && (CIB.config.features.enableAdsRedirectLinkForTextMessage = kw),
        dw && (CIB.config.features.enableCopyHtml = dw),
        gw && (CIB.config.features.enableExportPdfWithAnswerScreenshot = gw),
        nb && (CIB.config.features.enableExportDocxWithAnswerScreenshot = nb),
        tb && (CIB.config.features.enableLibrariesSplitImport = tb),
        ib && (CIB.config.features.enableFlatActionBar = ib),
        pb && (CIB.config.features.enableSydBeacon = pb),
        bb && (CIB.config.features.enableStartPromotion = bb),
        wb && (CIB.config.features.enableThreadContextMenu = wb),
        lb && (CIB.config.features.enableNewTables = lb,
        CIB.config.messaging.tableVersion = an),
        ab && (CIB.config.features.enableBufferMessage = ab),
        vb && (CIB.config.features.enableBufferDots = vb),
        ik && (CIB.config.features.enableMessagePrivacy = ik),
        rk && (CIB.config.features.enableCloseShareOnClickOutside = rk),
        yb && (CIB.config.features.enableOptimizedStreaming = yb),
        uk && (CIB.config.features.enableUpdateProfile = uk),
        hr(),
        kb && (CIB.config.sydney.request.optionsSets.length = 0),
        hk && (CIB.config.features.enableBackendExportService = hk),
        sr(),
        nk && (CIB.config.features.enableContextMessage = nk),
        v = t((nv = _w._sydConvConfig) === null || nv === void 0 ? void 0 : nv.codexOptionsSetsList, null),
        v && v.length > 0)
            for (st = 0; st < v.length; st++)
                u(CIB.config.sydney.request.optionsSets, v[st].value);
        if (cr(),
        ytt)
            if (ptt)
                try {
                    var vk = ClientObserver ? ClientObserver.getBrowserWidth() : kt()
                      , kit = ClientObserver ? ClientObserver.getBrowserHeight() : dt()
                      , vv = vk - n.padding2TMobile < n.MIN_WIDTH_MOBILE ? n.MIN_WIDTH_MOBILE : vk - n.padding2TMobile
                      , yv = kit;
                    ot(vv, yv, tk)
                } catch (trt) {
                    Log.Log("CI.Error", "SydneyMobile", "ClientObserver not loaded")
                }
            else
                vv = ClientObserver.getBrowserWidth(),
                yv = ClientObserver.getBrowserHeight(),
                ot(vv, yv, tk);
        pp && (CIB.config.features.enableTelemetryPrivacy = pp);
        p && typeof MsbSydneyHelper != "undefined" ? MsbSydneyHelper.initCompliantSydneyConfigs() : id && typeof BceSydneyHelper != "undefined" && BceSydneyHelper.initBingChatForEnterpriseSydneyConfigs();
        p || lr();
        ok && (CIB.config.features.enablePageHeaderOverlapClamping = ok);
        yit && (CIB.config.features.enablePersistentInputText = !0);
        sk && (CIB.config.features.enableEmptyThreadTime = sk)
    }
    function kt() {
        var n = Math.round(_d.documentElement.clientWidth || _w.innerWidth);
        return n < 100 && (n = 360),
        n
    }
    function dt() {
        var n = Math.round(_d.documentElement.clientHeight || _w.innerHeight);
        return n < 100 && (n = 636),
        n
    }
    function fr() {
        var n, i, r;
        CIB.config.features.enableMUIDUserMode = !0;
        CIB.config.features.enableSignInUpsellforMuidUser = !0;
        var u = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableCodexMuidConsentTop, !1)
          , f = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableCodexMuidConsentExplicit, !1)
          , e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableCodexMuidConsentImplicit, !1)
          , o = u || f || e;
        o && (CIB.config.features.enableCodexMuidConsentTop = u,
        CIB.config.features.enableCodexMuidConsentInlineExplicit = f,
        CIB.config.features.enableCodexMuidConsentInlineImplicit = e,
        CIB.config.sydney.muidUserConsentGiven = gt(),
        CIB.onConsentGiven && CIB.onConsentGiven(function() {
            pr()
        }))
    }
    function er() {
        var i, n = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.visualSearchRestrictedTonesList, null);
        (n === null || n === void 0 ? void 0 : n.length) > 0 && CIB.config.visualSearch && (CIB.config.visualSearch.restrictedTones = [],
        n.forEach(function(n) {
            CIB.config.visualSearch.restrictedTones.push(n.value)
        }))
    }
    function or() {
        var i, n = CIB.config.visualSearch, t;
        ((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.evssid) && n && (t = sj_cook === null || sj_cook === void 0 ? void 0 : sj_cook.get("_SS", "SID"),
        t && (n.query ? n.query.SID = t : n.query = {
            SID: t
        }))
    }
    function sr() {
        var r, o, s, h, c, l, a, v, y, p, w, b, k, d, g, tt = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableShareWholeThreadMockUp, !1), it = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableThreadShareLandingPage, !1), rt = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableShareConversation, !1), ut = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableShareThreadWithNoCache, !1), ft = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableWholeThreadPerformanceFix, !1), et = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableThreadShareWithoutRenderCardRequest, !1), ot = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableGetConversationAPIWithSNRProxy, !1), st = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableGetSharedMessagesAPIWithSNRProxy, !1), ht = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableBICHistory, !1), ct = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enable2TScreenshot, !1), lt = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enable2TScreenshotSnR, !1), nt = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enableThreads, !1), at = t((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.enableThreadsCF, !1), vt = t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.enableFlux3P, !1), n, i;
        if (tt && (CIB.config.features.enableShareWholeThreadMockUp = tt),
        it && (CIB.config.features.enableThreadShareLandingPage = it),
        rt && (CIB.config.features.enableShareConversation = rt),
        ut && (CIB.config.features.enableShareThreadWithNoCache = ut),
        ft && (CIB.config.features.enableWholeThreadPerformanceFix = ft),
        et && (CIB.config.features.enableThreadShareWithoutRenderCardRequest = et),
        ot && (CIB.config.features.enableGetConversationAPIWithSNRProxy = ot),
        st && (CIB.config.features.enableGetSharedMessagesAPIWithSNRProxy = st),
        ht && (CIB.config.features.enableBICHistory = ht),
        ct && (CIB.config.features.enableAnswerScreenshot = ct),
        lt && (CIB.config.features.enableAnswerScreenshotSnR = lt),
        nt) {
            if (CIB.config.features.enableThreads = nt,
            n = t((g = _w._sydThreads) === null || g === void 0 ? void 0 : g.threads, null),
            n && n.length > 0)
                for (i = 0; i < n.length; i++)
                    CIB.addThread(n[i]);
            u(CIB.config.sydney.request.optionsSets, "autosave")
        }
        (nt || at) && e(f.System, "THREADS", "1", "1")
    }
    function hr() {
        var n, i, r, u, f, e, s = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableAdSlugsDesktop, !1), h = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableAdSlugsMobile, !1), c = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSearchQueryForInlineAds, !1), l = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableDevFormOverrideForAds, !1), a = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enableFixForInlineAdsSQ, !1), o = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.codexPartnerScenario, "");
        s && (CIB.config.features.enableAdSlugsDesktop = !0);
        h && (CIB.config.features.enableAdSlugsMobile = !0);
        c && (CIB.config.features.enableSearchQueryForInlineAds = !0);
        l && (CIB.config.features.enableDevFormOverrideForAds = !0);
        a && (CIB.config.features.enableFixForInlineAdsSQ = !0);
        o !== "" && (CIB.config.sydney.request.scenario = o)
    }
    function cr() {
        var n, i, r, u = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableSydneySapphireUpsellMessageActions, !1), f = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydneySapphireUpsellEndOfChat, !1), e = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.sydneySapphireUpsellTreatment, 0);
        u && (CIB.config.features.enableSydSapphireUpsellOnMessageActions = u,
        CIB.config.mobileUpsell.sydSapphireUpsellTreatment = e);
        f && (CIB.config.features.enableSydSapphireUpsellOnEndOfChat = f,
        CIB.config.mobileUpsell.sydSapphireUpsellTreatment = e)
    }
    function lr() {
        var h, c, l, v, y, p, w, b, k, d, nt, tt, it, rt, ut, ft, et, ot, ht, ct, lt, at, ii = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.toneDefault, r), ri = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableToneCook, !1), ui = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableBalDefault, !1), fi = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.userPriorityLevel, 999), ei = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableUserPriorityLevel, !1), yt = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.enableTonePerf, !1), oi = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enableCreativeToneIgnoreAndDefaultToBalanced, !1), si = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enablePreciseToneIgnoreAndDefaultToBalanced, !1), vt, ni, ti;
        ((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.shareLoadingUI) && (CIB.config.features.enableShareLoadingUI = !0);
        var n = !ei || fi > 0
          , pt = n ? t((d = _w._sydConvConfig) === null || d === void 0 ? void 0 : d.balTone, "") : "harmonyv3"
          , wt = t((nt = _w._sydConvConfig) === null || nt === void 0 ? void 0 : nt.crtTone, "")
          , bt = t((tt = _w._sydConvConfig) === null || tt === void 0 ? void 0 : tt.prcTone, "")
          , kt = t((it = _w._sydConvConfig) === null || it === void 0 ? void 0 : it.sydBalOpts, "")
          , dt = t((rt = _w._sydConvConfig) === null || rt === void 0 ? void 0 : rt.sydCrtOpts, "")
          , gt = t((ut = _w._sydConvConfig) === null || ut === void 0 ? void 0 : ut.sydPrcOpts, "")
          , f = n ? t((ft = _w._sydConvConfig) === null || ft === void 0 ? void 0 : ft.sydBalExtraOpts, "") : ""
          , e = n ? t((et = _w._sydConvConfig) === null || et === void 0 ? void 0 : et.sydCrtExtraOpts, "") : ""
          , o = n ? t((ot = _w._sydConvConfig) === null || ot === void 0 ? void 0 : ot.sydPrcExtraOpts, "") : "";
        kt && (f += (f !== "" ? "," : "") + kt);
        dt && (e += (e !== "" ? "," : "") + dt);
        gt && (o += (o !== "" ? "," : "") + gt);
        f && (s.Balanced = f.split(","));
        e && (s.Creative = e.split(","));
        o && (s.Precise = o.split(","));
        pt && (i[r] = pt);
        wt && (i[g] = wt);
        bt && (i[st] = bt);
        yt && (CIB.config.features.enableTonePerf = yt);
        CIB.config.features.enableResponseToneSelector = !0;
        CIB.config.features.enablePersistentResponseToneSelector = t((ht = _w._sydConvConfig) === null || ht === void 0 ? void 0 : ht.enablePersistentToneSelector, !1);
        CIB.config.features.enableResponseToneObjects = (lt = (ct = _w._sydConvConfig) === null || ct === void 0 ? void 0 : ct.enableSuppressTones) !== null && lt !== void 0 ? lt : !1;
        CIB.config.features.enableResponseToneColorThemes = !0;
        vt = Object.keys(i);
        ((at = _w._sydConvConfig) === null || at === void 0 ? void 0 : at.enableSuppressTones) ? CIB.config.sydney.responseTones = vt.map(function(n) {
            var t, i, r = (i = (t = _w._sydConvConfig) === null || t === void 0 ? void 0 : t["suppressKnob".concat(n)]) !== null && i !== void 0 ? i : 0;
            return {
                tone: n,
                disabled: r
            }
        }) : CIB.config.sydney.responseToneOptions = vt;
        ni = oi && g === a();
        ti = si && st === a();
        ni || ti ? ar() : ri ? wr(ii) : ui && u(CIB.config.sydney.request.optionsSets, i[r]);
        kr()
    }
    function ar() {
        CIB.config.sydney.request.optionsSets = v(CIB.config.sydney.request.optionsSets, r, CIB.responseTone);
        u(CIB.config.sydney.request.optionsSets, i[r]);
        CIB.responseTone = r;
        h = CIB.responseTone
    }
    function it(n) {
        var u, f = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableStreamSyntheticTextResponses, !1);
        f && (CIB.config.messaging.streamSyntheticTextResponses = n === r && i[r] === "galileo" ? !0 : !1)
    }
    function vr(n) {
        if (!n)
            return d.Demote;
        for (var t in d)
            if (t.toLowerCase().trim() === n.toLowerCase().trim())
                return d[t];
        return d.Demote
    }
    function yr() {
        var t = sj_cook.get(n.userCook, tr)
          , i = vr(t);
        CIB.config.sydney.bingFirstPageAdultFilter = i
    }
    function gt() {
        var t = sj_cook.get(n.userCook, vt)
          , i = sj_cook.get(w, w);
        return t === i
    }
    function pr() {
        var t = sj_cook.get(w, w);
        sj_cook.set(n.userCook, vt, t, !0, "/", null);
        e(f.System, "MuidConsentProvided", "MuidUser", "1")
    }
    function a() {
        var i, r = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableToneCookExpiry, !1), u = r ? n.toneCook : n.userCook;
        return sj_cook.get(u, n.toneCrumb)
    }
    function wr(o) {
        var c, l, y, w, b, tt = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableToneCookExpiry, !1), d = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableBalancedSerp, !1), et = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableAlwaysCreativeSerp, !1), ot = t((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.enableSuperOptionsSets, !1), st = t((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.enableBalancedSerpLog, !1), s = a(), nt, ft;
        if (st && s != r && e(f.System, "BalSerpOverride", "Tone", {
            tone: s
        }),
        dr()) {
            nt = rt(lt).toLowerCase().trim();
            CIB.responseTone = k[nt];
            ut(CIB.responseTone, !1, tt);
            e(f.System, "SET_TONE_FROM_URL", nt, "");
            e(f.System, p, "Tone", {
                tone: CIB.responseTone
            });
            return
        }
        et ? (s = g,
        CIB.responseTone = s) : !d && s != null && i.hasOwnProperty(s) ? (CIB.responseTone = s,
        e(f.System, p, "Tone", {
            tone: s
        })) : (tt && (ft = sj_cook.get(n.userCook, n.hasSetToneCrumb),
        ft == "1" && (sj_cook.set(n.userCook, n.hasSetToneCrumb, "0", !0, "/", null),
        e(f.System, "ResetTone", "Tone", {}))),
        CIB.responseTone = o,
        s = o,
        e(f.System, "DefaultTone", "Tone", {
            tone: s
        }));
        ot && u(CIB.config.sydney.request.optionsSets, bi);
        !d && i.hasOwnProperty(s) ? (u(CIB.config.sydney.request.optionsSets, i[s]),
        CIB.config.sydney.request.optionsSets = v(CIB.config.sydney.request.optionsSets, s),
        h = s,
        it(h)) : d && i.hasOwnProperty(r) && (u(CIB.config.sydney.request.optionsSets, i[r]),
        CIB.config.sydney.request.optionsSets = v(CIB.config.sydney.request.optionsSets, r),
        h = r,
        it(r))
    }
    function br(n) {
        var i, r = n && n.length > 1 ? n[1] : null, u = r ? r.toLowerCase().trim() : "", o, s;
        r && k.hasOwnProperty(u) && (o = n && n.length > 2 ? n[2] : !1,
        s = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableToneCookExpiry, !1),
        CIB.responseTone = k[u],
        ut(CIB.responseTone, o, s),
        e(f.System, p, "Tone", {
            tone: CIB.responseTone
        }))
    }
    function kr() {
        var n, i, r, u;
        if (sj_evt.bind(gi, br, !0),
        r = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableToneCookExpiry, !1),
        u = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.isCompliantSydneyEndpointEnabled, !1),
        !u && CIB.onResponseToneChanged)
            CIB.onResponseToneChanged(function(n) {
                ut(n, !0, r)
            })
    }
    function rt(n) {
        var i = _w.location.search
          , r = new URLSearchParams(i)
          , t = r.get(n);
        return t ? t : ""
    }
    function dr() {
        var n, r = t((n = _w._sydConvConfig) === null || n === void 0 ? void 0 : n.enableSetToneFromUrl, !1), i;
        return r ? (i = rt(lt),
        i && k.hasOwnProperty(i.toLowerCase().trim())) : !1
    }
    function ut(t, r, f) {
        var c = [i[t]].concat(s[t]).toString(), e, o;
        t !== a() && ti("ChangedTone", "Tone", {
            newTone: t
        });
        r && (f ? (e = nu(),
        sj_cook.set(n.toneCook, n.toneCrumb, t, !0, "/", e),
        sj_cook.set(n.toneCook, n.toneOptsCrumb, c, !0, "/", e),
        sj_cook.set(n.userCook, n.hasSetToneCrumb, "1", !0, "/", null)) : (sj_cook.set(n.userCook, n.toneCrumb, t, !0, "/", null),
        sj_cook.set(n.userCook, n.toneOptsCrumb, c, !0, "/", null)));
        i.hasOwnProperty(t) && (o = ni(CIB.config.sydney.request.optionsSets, Object.keys(i)),
        o !== -1 ? CIB.config.sydney.request.optionsSets[o] = i[t] : u(CIB.config.sydney.request.optionsSets, i[t]),
        CIB.config.sydney.request.optionsSets = v(CIB.config.sydney.request.optionsSets, t, h),
        h = t,
        it(h))
    }
    function gr() {
        var u, e, o, s = n.getConfigOrDefault((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableBalancedSerp, !1), t, i, h;
        s && !bt && (bt = !0,
        s && (t = n.getCookieTone(),
        t != null && t != r && (i = CIB.manager.conversation._lastMessage,
        h = (o = (e = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || e === void 0 ? void 0 : e.greeting) === null || o === void 0 ? void 0 : o.shouldSendBotGreeting,
        CIB.config.greeting.shouldSendBotGreeting = !1,
        n.shouldResetBotGreeting = !1,
        CIB.responseTone = t,
        n.lastQuery = "",
        i && i.text && CIB.registerContext([{
            author: "bot",
            source: "serpBalResp",
            text: i.text
        }]),
        n.shouldResetBotGreeting = !0,
        CIB.config.greeting.shouldSendBotGreeting = h,
        n.SydLog(f.System, "SetCookToneAfterSERP", "Tone", {
            tone: t
        }))))
    }
    function nu() {
        var n = new Date;
        return n.setDate(n.getDate() + (n.getHours() < 2 ? 1 : 2)),
        n.setHours(2),
        n.setMinutes(0),
        n.setSeconds(0),
        n.setMilliseconds(0),
        (n.getTime() - (new Date).getTime()) / 6e4
    }
    function v(n, t, i) {
        return i === void 0 && (i = ""),
        i != "" && s.hasOwnProperty(i) && (n = tu(n, s[i])),
        t != "" && s.hasOwnProperty(t) && s[t].forEach(function(t) {
            u(n, t)
        }),
        n
    }
    function u(n, t) {
        t && n.indexOf(t) < 0 && n.push(t)
    }
    function tu(n, t) {
        return t.forEach(function(t) {
            var i = n.indexOf(t);
            i >= 0 && n.splice(i, 1)
        }),
        n
    }
    function ni(n, t) {
        for (var f, u, r = 0; r < t.length; r++)
            if (f = t[r],
            u = n.indexOf(i[f]),
            u >= 0)
                return u;
        return -1
    }
    function ft(n, t) {
        var i = {};
        return t ? n.locType && (i.LocationType = n.locType) : n.accuracy && (i.Accuracy = n.accuracy),
        n.state && (i.State = decodeURI(n.state)),
        n.city && (i.City = decodeURI(n.city)),
        n.lat && n.long && (i.Center = {
            Latitude: parseFloat(n.lat),
            Longitude: parseFloat(n.long)
        }),
        n.source && (i.LocationSource = n.source),
        n.altitude && (i.Altitude = n.altitude),
        n.altitudeAcc && (i.AltitudeAccuracy = n.altitudeAcc),
        n.displayName && (i.DisplayName = n.displayName),
        n.name && (i.Name = n.name),
        n.heading && (i.Heading = n.heading),
        n.isValidLocation && (i.IsValidLocation = n.isValidLocation),
        n.range && (i.Radius = n.range),
        n.speed && (i.Speed = n.speed),
        n.ts && (i.Timestamp = n.ts),
        n.ets && (i.ExpiryTimestamp = n.ets),
        i
    }
    function iu() {
        var t = (new Date).getTimezoneOffset(), r = Math.floor(Math.abs(t / 60)), u = Math.abs(t % 60), i;
        t < 0 ? i = "+" + o(r) + ":" + o(u) : t > 0 ? i = "-" + o(r) + ":" + o(u) : t == 0 && (i = "Z");
        var n = new Date
          , f = n.getDate()
          , e = n.getMonth() + 1
          , s = n.getFullYear()
          , h = n.getHours()
          , c = n.getMinutes()
          , l = n.getSeconds();
        return o(s) + "-" + o(e) + "-" + o(f) + "T" + o(h) + ":" + o(c) + ":" + o(l) + i
    }
    function o(n) {
        return n < 10 ? "0" + n : n
    }
    function c(n, t) {
        if (t) {
            var i = t.split(",");
            return n.concat(i)
        }
        return n
    }
    function t(n, t) {
        return typeof n != "undefined" ? n : t
    }
    function ru(n) {
        var t = __spreadArray([], CIB.config.sydney.request.optionsSets, !0), r;
        return i.hasOwnProperty(n) && (r = ni(t, Object.keys(i)),
        r !== -1 && (t[r] = i[n]),
        t = v(t, n, h)),
        t
    }
    function e(n, i, r, u) {
        var f, e, o, s = [], c = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.isCompliantSydneyEndpointEnabled, !1), h, l;
        c && s.push("IsBizChat", c.toString());
        h = t((e = _w._sydConvConfig) === null || e === void 0 ? void 0 : e.isBingChatForEnterprise, !1);
        h && s.push("IsBCE", h.toString());
        l = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.enableTelemetryPrivacy, !1);
        l && (u = uu(u));
        Log.Log.apply(Log, __spreadArray([n, "Codex", i, !1, "Namespace", r, "CustomData", JSON.stringify(u)], s, !1))
    }
    function uu(n) {
        return ir.forEach(function(t) {
            var i, r;
            n[t] !== undefined && (n[t] = tt);
            ((i = n.CustomData) === null || i === void 0 ? void 0 : i[t]) !== undefined && (n.CustomData[t] = tt);
            ((r = n.EncryptedData) === null || r === void 0 ? void 0 : r[t]) !== undefined && (n.EncryptedData[t] = tt)
        }),
        n
    }
    function ti(n, t, i) {
        e(f.Interaction, n, t, i)
    }
    function fu() {
        if (history && (sj_be(_w, "popstate", function(t) {
            var i, r;
            ((i = t === null || t === void 0 ? void 0 : t.state) === null || i === void 0 ? void 0 : i.inConvMode) && _G[n.SYD_MODE] == "serp" ? sj_evt.fire("showSydFSC", null, null, !1, !0) : ((r = t === null || t === void 0 ? void 0 : t.state) === null || r === void 0 ? void 0 : r.inConvMode) || _G[n.SYD_MODE] != "conversation" || sj_evt.fire("hideSydFSC", !0);
            b && (l = undefined)
        }),
        URLSearchParams)) {
            var t = new URLSearchParams(window.location.search);
            pt = t.get("showconv") === "1"
        }
    }
    function eu(n) {
        if (history) {
            if (b) {
                if (pt && wt && n) {
                    wt = !1;
                    history.replaceState({
                        inConvMode: n
                    }, "conv");
                    return
                }
                if (l !== undefined && l !== n) {
                    l = undefined;
                    history.back();
                    return
                }
            }
            history.pushState({
                inConvMode: n
            }, "conv");
            b && (l = n)
        }
    }
    function ou() {
        var t, n;
        ((t = history === null || history === void 0 ? void 0 : history.state) === null || t === void 0 ? void 0 : t.inConvMode) && (n = _ge("sb_form_q"),
        n && n.value ? sj_evt.fire("showSydFSC", n.value) : sj_evt.fire("showSydFSC"))
    }
    function su() {
        function w(n) {
            if (n && n.length >= 2) {
                var t = n[1].waitlist;
                t && t == "2" && (CIB.config.features.enableMUIDUserMode = !1,
                CIB.config.messaging.maxTurnsPerConversation = rt,
                sj_evt.unbind("rewready", w))
            }
        }
        var i, r, u, f, e, o, s, h, c, l, d = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableSydTigerAns, !1), g = t((r = _w._sydConvConfig) === null || r === void 0 ? void 0 : r.enableSydAjaxReset, !1), y, p, a, b, k, v;
        CIB.onModeChanged(function(t) {
            switch (t) {
            case "conversation":
                sj_evt.fire("showSydFSC");
                break;
            case "off-stage":
                if (n.ignoreFirstOffStage) {
                    n.ignoreFirstOffStage = !1;
                    CIB.showConversation();
                    break
                }
                sj_evt.fire("hideSydFSC");
                break;
            default:
                Log.Log("ClientInst", "Codex", "ModeChangeError", !1, "CustomData", JSON.stringify({
                    mode: t
                }))
            }
        });
        if (d && (y = _ge("b_sydTigerCont"),
        y)) {
            p = _d.querySelector("#b_pole #b_sydTigerCont") != null;
            CIB.onSerpSlotSuggestionInvoked(function() {
                _G[n.SYD_MODE] != "conversation" && (n.LogIntEvent("ConversationViewEnter", p ? "Pole" : "RightRail", {
                    source: "ChatBubble"
                }),
                sj_evt.fire("showSydFSC"))
            });
            a = _ge("sb_form_q");
            a && (CIB.config.sydney.slottedModeTurnIndex = ei() && ((e = (f = (u = CIB === null || CIB === void 0 ? void 0 : CIB.vm) === null || u === void 0 ? void 0 : u.conversation) === null || f === void 0 ? void 0 : f.turns) === null || e === void 0 ? void 0 : e.length) ? Math.max(CIB.vm.conversation.turns.length - 1, 0) : 0,
            n.lastQuery = a.value.toLowerCase().trim())
        }
        g && sj_evt.bind("ajax.unload", function() {
            var n, t, i, r, u, f, e, o, s, h, c;
            CIB && (c = (t = (n = CIB === null || CIB === void 0 ? void 0 : CIB.config) === null || n === void 0 ? void 0 : n.greeting) === null || t === void 0 ? void 0 : t.shouldSendBotGreeting,
            CIB.config.greeting.shouldSendBotGreeting = !1,
            (u = (r = (i = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || i === void 0 ? void 0 : i.stream) === null || r === void 0 ? void 0 : r.subscription) === null || u === void 0 ? void 0 : u.dispose(),
            (e = (f = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || f === void 0 ? void 0 : f.stream) === null || e === void 0 ? void 0 : e.complete(),
            (s = (o = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || o === void 0 ? void 0 : o.stream) === null || s === void 0 ? void 0 : s.finalizeStreamSubscription(),
            (h = CIB === null || CIB === void 0 ? void 0 : CIB.manager) === null || h === void 0 ? void 0 : h.resetConversation(),
            CIB.config.greeting.shouldSendBotGreeting = c)
        });
        var tt = t((o = _w._sydConvConfig) === null || o === void 0 ? void 0 : o.codexMUIDUser, !1)
          , it = t((s = _w._sydConvConfig) === null || s === void 0 ? void 0 : s.enableSigninTurnFix, !0)
          , rt = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.maxTurnsPerConversation, nt);
        if (tt && it && sj_evt.bind("rewready", w, !0),
        CIB.onModalVisibilityChanged)
            CIB.onModalVisibilityChanged(function(n) {
                var t = _ge("b_header");
                t && (n ? Lib.CssClass.add(t, yt) : Lib.CssClass.remove(t, yt))
            });
        b = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableThreads, !1);
        k = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.isAccountLinkedWithActiveAAD, !1);
        !b && k && (v = _qs("body"),
        v && Lib.CssClass.add(v, rr))
    }
    function hu() {
        var t, i, r, u, f, e, o, s, h, l = (r = (i = (t = CIB === null || CIB === void 0 ? void 0 : CIB.vm) === null || t === void 0 ? void 0 : t.conversation) === null || i === void 0 ? void 0 : i.model) === null || r === void 0 ? void 0 : r.suggestions, n = document.activeElement, c;
        return !l || !n || n.nodeName !== "CIB-SERP" ? "" : (n = (s = (o = (e = (f = (u = n === null || n === void 0 ? void 0 : n.shadowRoot) === null || u === void 0 ? void 0 : u.activeElement) === null || f === void 0 ? void 0 : f.shadowRoot) === null || e === void 0 ? void 0 : e.activeElement) === null || o === void 0 ? void 0 : o.shadowRoot) === null || s === void 0 ? void 0 : s.activeElement,
        !n || n.nodeName !== "CIB-SUGGESTION-ITEM") ? "" : (n = (h = n === null || n === void 0 ? void 0 : n.shadowRoot) === null || h === void 0 ? void 0 : h.activeElement,
        !n || n.nodeName !== "BUTTON" || !n.textContent) ? "" : (c = n.textContent.trim(),
        l.find(function(n) {
            return n.text === c
        })) ? c : ""
    }
    function cu(n) {
        var i, u = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.enableTigerCachedAttr, !1), r;
        n && (u && (this.config.messaging.streamCachedResponses = !1,
        r = _d.querySelector("#b_sydTigerCont cib-serp"),
        r && r.setAttribute("cached", "")),
        this.processCachedResponse(n))
    }
    function et(n) {
        var t = _ge(n);
        t && t.parentElement && t.parentElement.removeChild(t)
    }
    function lu(n) {
        CIB.processCachedResponse(n)
    }
    function au() {
        var u, f, o = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.enableSydTestCache, !1), r, i, e;
        o && (r = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.sydTestCacheMsg, ""),
        i = null,
        r && r.indexOf('{"messages":') == 0 && (i = JSON.parse(r)),
        e = cu.bind(CIB),
        CIB.sendSearchQuery = function() {
            e(i)
        }
        ,
        CIB.addMessage = function() {
            e(i)
        }
        ,
        n.processCachedResponseUsingCIB = function() {
            CIB.processCachedResponse(i)
        }
        )
    }
    function ii(n, t, i, r, u, f, e) {
        n === void 0 && (n = "");
        t === void 0 && (t = "");
        i === void 0 && (i = "");
        r === void 0 && (r = "");
        u === void 0 && (u = !1);
        f === void 0 && (f = !1);
        e === void 0 && (e = !1);
        sj_evt.fire("showSydFSC", n, t, r, u, i, f, e)
    }
    function vu() {
        var i = new RegExp("[?&]{1}q=([^&]+)")
          , n = _w.location.search.match(i)
          , t = n ? n[1] : null;
        return t ? decodeURIComponent(t.replace("+", " ")) : ""
    }
    function y() {
        var i, r, u, e = t((i = _w._sydConvConfig) === null || i === void 0 ? void 0 : i.isSapphireClient, !1), f, n;
        return e ? vu() : (f = typeof sj_b != "undefined" && sj_b != null ? sj_b : _d.body,
        n = f.querySelectorAll("textarea.b_searchbox, input.b_searchbox:not(#uaseabox)"),
        !n || n.length <= 0) ? "" : (u = (r = n[0]) === null || r === void 0 ? void 0 : r.getAttribute("value")) !== null && u !== void 0 ? u : ""
    }
    function yu() {
        var t = new URLSearchParams(_w.location.search)
          , i = t.get(at);
        i && (n.lastQuery = y().toLowerCase().trim())
    }
    function ri(n, t, i, r, u, f) {
        var o, e, s;
        t === void 0 && (t = !1);
        i === void 0 && (i = "");
        r === void 0 && (r = "");
        u === void 0 && (u = !1);
        f === void 0 && (f = !1);
        o = "";
        t && (o = y());
        e = i;
        e || (s = _d.querySelector(".b_ans #b_wpt_data"),
        s && (e = s.getAttribute("data-sydctx")));
        ii(n, e, o, r, !1, u, f)
    }
    function pu(n, t) {
        n === void 0 && (n = "");
        t === void 0 && (t = "");
        var i = y();
        ri(i, !1, n, t, !1, !0)
    }
    function wu(t) {
        n.isSydFSCEligible = t
    }
    function bu(n) {
        for (var i = [], t = 1; t < arguments.length; t++)
            i[t - 1] = arguments[t]
    }
    function ku() {
        sj_evt.fire("clarity.trigger", "cibChat")
    }
    function du(n, t, i) {
        return !n || t && (!i || i.toLowerCase().trim() !== y().toLowerCase().trim())
    }
    function gu(t, i) {
        var l, a, v, y, p, w, b, k, rt, o, d, u, e, it, vt, h, yt, r, c, pt, wt, bt, kt;
        i === void 0 && (i = !1);
        rt = n.getConfigOrDefault((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableSydCarouselHistory, !1);
        ui();
        var f = sj_ce("div", "b_metaCont")
          , ut = sj_ce("div", "b_metaCont_Title")
          , dt = n.getConfigOrDefault((a = _w._sydConvTranslation) === null || a === void 0 ? void 0 : a.sydneyCarouselTitle, "");
        ut.textContent = dt;
        f.appendChild(ut);
        o = sj_ce("div", "b_meta_bot");
        f.appendChild(o);
        d = sj_ce("div", "b_metaChat");
        u = sj_ce("div", "b_metaCont_PillCont", "b_meta_hideEx");
        i ? u.appendChild(d) : o.appendChild(d);
        o.appendChild(u);
        var ft = n.getConfigOrDefault((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.carouselQueries, "")
          , gt = n.getConfigOrDefault((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.sydCarPropQuery, !1)
          , ot = ft ? ft.split(",") : null
          , g = ot ? ot : CIB.vm.conversation.model.messages.filter(function(n) {
            return n.type === "meta" && n.text != "Generating answers for you..."
        }).map(function(n) {
            return n.text
        })
          , st = 0
          , ni = i ? _w.innerWidth - ht - ai : li
          , ti = _w.innerWidth - ht - ct
          , lt = !i
          , at = ni - ct
          , ii = CIB.vm.conversation.model._id
          , nt = !0;
        for (e = g.length - 1; e >= 0; e--) {
            var ri = g[e]
              , s = ri.split("`")
              , tt = s.length == 1 ? s[0] : s.length == 3 ? s[1] : "";
            nt && (it = nf(tt) + 2 * vi + yi,
            st + it < at ? st += it : lt ? (nt = !1,
            vt = e + 1,
            h = sj_ce("div", "b_meta_exp", "b_metaCont_Pill"),
            h.innerText = "+" + vt.toString(),
            sj_be(h, "click", function() {
                Lib.CssClass.add(u, "b_metaExpanded")
            }),
            u.append(h)) : (at = ti,
            lt = !0));
            yt = "cdxche";
            r = sj_ce("a", null, "b_metaCont_Pill" + (nt ? "" : " b_hide"));
            r.href = _w.location.origin + _w.location.pathname + "?q=" + tt + "&form=" + yt;
            rt && (r.href = r.href + "&convid=" + ii);
            gt && (r.href = r.href + "&features=sydcarousel,sydcpropq");
            r.textContent = tt;
            r.target = "_blank";
            sj_be(r, "click", function(t) {
                var r = _ge("CodexCarouselInstLink"), i;
                _w.si_ct && _w.si_ct(r);
                i = t === null || t === void 0 ? void 0 : t.target;
                n.LogIntEvent("QueryCarouselClick", "QueryCarousel", {
                    query: i === null || i === void 0 ? void 0 : i.textContent
                })
            });
            u.appendChild(r)
        }
        c = sj_ce("div", "b_meta_col", "b_metaCont_Pill b_hide");
        c.innerText = n.getConfigOrDefault((p = _w._sydConvTranslation) === null || p === void 0 ? void 0 : p.sydneyCarouselCollapse, "Collapse");
        sj_be(c, "click", function() {
            Lib.CssClass.remove(u, "b_metaExpanded")
        });
        u.append(c);
        g.length > 0 && (pt = n.getConfigOrDefault((w = _w._sydConvConfig) === null || w === void 0 ? void 0 : w.suppressAlsoTryWhenEnableSydCarousel, !1),
        pt && et("b_alsotry"),
        wt = n.getConfigOrDefault((b = _w._sydConvConfig) === null || b === void 0 ? void 0 : b.suppressPoleRSWhenEnableSydCarousel, !1),
        wt && et("brspole"),
        bt = n.getConfigOrDefault((k = _w._sydConvConfig) === null || k === void 0 ? void 0 : k.suppressPoleRecommendedSearchWhenEnableSydCarousel, !1),
        bt && et("polerecommendedsearch"),
        t.children.length > 0 ? (kt = _w.getComputedStyle(t, null),
        kt.paddingLeft == "0px" && Lib.CssClass.add(f, "b_metaPadding"),
        t.insertBefore(f, t.children[0])) : t.appendChild(f),
        sj_evt.fire(di))
    }
    function nf(n) {
        var i = sj_ce("canvas")
          , t = i.getContext("2d");
        return t.font = "14px Roboto",
        t.measureText(n).width
    }
    function ui() {
        var n = _ge("b_metaCont");
        n && n.parentElement && n.parentElement.removeChild(n)
    }
    function fi() {
        var n = rt(ki);
        return n !== null && n !== void 0 ? n : ""
    }
    function ot(n, i, r) {
        var u, f, e, o, s, h, c, l, a, v = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.disable2TSearchHistory, !1), y = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.enable2TTest, !1);
        ((o = (e = CIB.config) === null || e === void 0 ? void 0 : e.answers) === null || o === void 0 ? void 0 : o.query) && (CIB.config.answers.query.IG = _G.IG,
        CIB.config.answers.query.IID = (s = _ge("b_sydConvCont")) === null || s === void 0 ? void 0 : s.getAttribute("_iid"),
        CIB.config.answers.query.cw = n,
        CIB.config.answers.query.ch = i,
        y && (CIB.config.answers.query.features = fi()),
        v && (CIB.config.answers.query.dissrchswrite = "1"));
        ((c = (h = CIB.config) === null || h === void 0 ? void 0 : h.ads) === null || c === void 0 ? void 0 : c.query) && (CIB.config.ads.query.IG = _G.IG,
        CIB.config.ads.query.IID = r ? (l = _ge("CodexAdsInstLink")) === null || l === void 0 ? void 0 : l.getAttribute("_iid") : (a = _ge("b_sydConvCont")) === null || a === void 0 ? void 0 : a.getAttribute("_iid"),
        CIB.config.ads.query.cw = n,
        CIB.config.ads.query.ch = i,
        y && (CIB.config.ads.query.features = fi()),
        CIB.config.ads.query.form = "codexx",
        v && (CIB.config.ads.query.dissrchswrite = "1"))
    }
    function tf() {
        var n = new URLSearchParams(_w.location.search)
          , t = n.get("showconv")
          , i = n.get("sendquery");
        return i === "1" || t !== "1"
    }
    function rf(i, r, u, f) {
        var h, c, l, a, v, y, p, b = t((h = _w._sydConvConfig) === null || h === void 0 ? void 0 : h.enableSydContext, !1), k = t((c = _w._sydConvConfig) === null || c === void 0 ? void 0 : c.enableSQMsg, !1), d = t((l = _w._sydConvConfig) === null || l === void 0 ? void 0 : l.enableConvModeSwitchAjax, !1), g = t((a = _w._sydConvConfig) === null || a === void 0 ? void 0 : a.enableCodexMuidConsentTop, !1), nt = t((v = _w._sydConvConfig) === null || v === void 0 ? void 0 : v.enableCodexMuidConsentExplicit, !1), tt = t((y = _w._sydConvConfig) === null || y === void 0 ? void 0 : y.enableCodexMuidConsentImplicit, !1), it = g || nt || tt, rt = t((p = _w._sydConvConfig) === null || p === void 0 ? void 0 : p.bypassConsentCheck, !1), ut = CIB.vm.conversation.model.messages.filter(function(n) {
            return n.author == "user"
        }).length, e, o, w, s;
        if (i && i != n.lastQuery && tf() && i != n.firstQuery && (!it || gt() || rt || ut < 1)) {
            if (f && d) {
                if (n.isSmoothConvSwitchUpdatedPage())
                    return;
                try {
                    if (e = CIB.vm.conversation.model.messages.filter(function(n) {
                        return n.type === "meta" && n.text != "Generating answers for you..." || n.type === "text" && n.author === "user"
                    }),
                    e && e.length > 0 && (o = e[e.length - 1].text.split("`"),
                    w = o.length == 1 ? o[0] : o.length == 3 ? o[1] : "",
                    w.toLowerCase() == i.toLowerCase()))
                        return
                } catch (ft) {}
            }
            s = [];
            u && s.push({
                author: "user",
                text: u
            });
            r && s.push({
                author: "bot",
                text: r
            });
            b && s.length != 0 && CIB.registerContext(s);
            k && f && !CIB.manager.conversation._lastMessage && !CIB.manager.conversation.messages.length ? CIB.sendSearchQuery(i) : CIB.addMessage(i);
            n.lastQuery = i;
            n.firstQuery.length == 0 && (n.firstQuery = i)
        }
    }
    function uf(n, t) {
        return new Promise(function(i, r) {
            var u = sj_gx();
            u.onreadystatechange = function() {
                u.readyState === 4 && (u.status === 200 ? i(u) : r(u))
            }
            ;
            u.onerror = function() {
                r(u)
            }
            ;
            u.open("POST", n, !0);
            u.setRequestHeader("content-type", "application/json");
            u.send(t)
        }
        )
    }
    function ff(n) {
        var u, f, i, r;
        return n ? (i = t((u = _w._sydConvConfig) === null || u === void 0 ? void 0 : u.tigerEnhancedPromptTemplate, ""),
        !i) ? n : (i = i.replace("{0}", n),
        r = t((f = _w._sydConvConfig) === null || f === void 0 ? void 0 : f.language, ""),
        r && r.indexOf("English") < 0 && (i += " Respond in language " + r),
        i) : n
    }
    function ei() {
        var n, t = new URLSearchParams(_w === null || _w === void 0 ? void 0 : _w.location.search);
        return t.has("form") && ((n = t.get("form")) === null || n === void 0 ? void 0 : n.toLowerCase()) === "convaj" && _w._isConvAjaxUpdated
    }
    var oi = "sydneyOptionsSets", si = "codexFeatures", hi = "speechSrOptions", g = "Creative", r = "Balanced", st = "Precise", nt = 5, ci = 2e3, li = 750, ht = 48, ai = 42, vi = 16, yi = 6, ct = 60, pi = 66, wi = 1e3, bi = "so_bing_chat", lt = "seltone", ki = "twoTFeatures", di = "SydAddCarousel", at, p;
    n.SYD_MODE = "SydMode";
    n.SYD_PREV_MODE = "SydPrevMode";
    n.lastQuery = (n === null || n === void 0 ? void 0 : n.lastQuery) ? n === null || n === void 0 ? void 0 : n.lastQuery : "";
    n.firstQuery = "";
    n.ignoreFirstOffStage = !1;
    n.shouldResetBotGreeting = !0;
    n.shouldForceSendBotGreeting = !1;
    at = "shareId";
    n.userCook = "SRCHHPGUSR";
    n.toneCook = "CDXTC";
    n.toneCrumb = "cdxtone";
    n.toneOptsCrumb = "cdxtoneopts";
    p = "InitialTone";
    n.hasSetToneCrumb = "cdxts";
    var gi = "crtone", nr = "cdxwinturn", tr = "ADLT", w = "MUID", vt = "CMUID", ir = ["chips", "query", "searchQuery", "text"], tt = "<stripped/>", yt = "cdxModalVisible", rr = "aad", b = !1, l, pt = !1, wt = !0, f = {
        System: "SystemEvent",
        Interaction: "InteractionEvent"
    }, i = {
        Creative: "h3imaginative",
        Balanced: "harmonyv3",
        Precise: "h3precise"
    }, k = {
        c: "Creative",
        b: "Balanced",
        p: "Precise"
    }, s = {
        Creative: [],
        Balanced: [],
        Precise: []
    }, h = "", bt = !1, d = {
        Off: "1",
        Demote: "2",
        Strict: "4",
        KidSafe: "8",
        Stricter: "16",
        AdultOnly: "32"
    };
    n.isSydFSCEligible = n.isSydFSCEligible ? n.isSydFSCEligible : !1;
    n.isConfigSet = !1;
    n.enableCreatorSendQueryWhenShowConvQuery = !0;
    n.padding2TMobile = 92;
    n.MIN_WIDTH_MOBILE = 288;
    n.setConfigs = ur;
    n.getMobileBrowserWidth = kt;
    n.getMobileBrowserHeight = dt;
    n.getCookieTone = a;
    n.updateResponseToneAfterSerp = gr;
    n.getConfigOrDefault = t;
    n.getAllowedToneOptionsSets = ru;
    n.SydLog = e;
    n.LogIntEvent = ti;
    n.setupHistory = fu;
    n.pushSydHistory = eu;
    n.checkInitialState = ou;
    n.setEventListeners = su;
    n.getActiveSuggestionChipText = hu;
    n.processCachedResponseUsingCIB = lu;
    n.setTestMocks = au;
    n.triggerSydFSC = ii;
    n.getQuery = y;
    n.triggerShareFlow = yu;
    n.triggerSydFSCWithContext = ri;
    n.triggerSydFSCQueryWithContext = pu;
    n.setSydFSCEligibleState = wu;
    n.sydPayWallTrace = bu;
    n.triggerClarity = ku;
    n.shouldMove1TAnswers = du;
    n.addCarousel = gu;
    n.removeQueries = ui;
    n.set2TQueryConfigs = ot;
    n.sendFirstQuery = rf;
    n.createRequest = uf;
    n.createIntelligentQuery = ff;
    n.isSmoothConvSwitchUpdatedPage = ei;
    sj_evt.fire("SydFSCHelperLoaded")
}
)(SydFSCHelper || (SydFSCHelper = {}))
